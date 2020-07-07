import { Injectable, Output } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { OnlineOfflineService } from './online-offline.service';
import Dexie from 'dexie';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons: Pokemon[] = new Array<Pokemon>(100);
  listaPokeAtt = new Subject<Pokemon[]>();
  contadorResponse = 0;
  totalCarregado = 0;
  novosPokesCarregados = new Subject<number>();
  contadorTotal = 0;
  activePokemon = new Subject<Pokemon>();

  private db: Dexie;
  private table: Dexie.Table<Pokemon, any> = null;

  @Output() searchItemSubject: Subject<string> = new Subject<string>();
  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    private onlineOfflineService: OnlineOfflineService
  ) {
    this.iniciarIndexedDb();
    this.ouvirStatusConexao();
  }
  // IndexedDb related //
  totalItensDb = 0;
  private async iniciarIndexedDb() {
    this.db = new Dexie('db-pokedex');
    this.db.version(1).stores({
      pokemon: 'id',
    });
    this.table = this.db.table('pokemon');
    this.table
      .count()
      .then((x) => {
        this.totalItensDb = x;
        this.getAllPokemons('https://pokeapi.co/api/v2/pokemon/?limit=100');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  private async salvarIndexedDb(pokemons: Pokemon[]) {
    try {
      await this.table.bulkAdd(pokemons);
      const todosPokemon: Pokemon[] = await this.table.toArray();
      console.log('Pokemon foi salvo no IndexedDb', todosPokemon);
    } catch (error) {
      console.log('erro ao incluir seguro no IndexedDb', error);
    }
  }

  private async enviarIndexedDbParaAPI() {
    const todosPokemon: Pokemon[] = await this.table.toArray();
    for (const pokemon of todosPokemon) {
      // this.salvarAPI(pokemon);
      this.table.delete(pokemon.id);
      console.log('seguro' + pokemon.id);
    }
  }

  private ouvirStatusConexao() {
    this.onlineOfflineService.statusConexao.subscribe((online) => {
      if (online) {
        if (this.pokemons.length === 807) {
          return;
        } else {
          this.getAllPokemons('https://pokeapi.co/api/v2/pokemon/?limit=100');
        }
      } else {
        this.getAllPokemons('https://pokeapi.co/api/v2/pokemon/?limit=100');
      }
    });
  }

  async getIndexedDbItens(total: number) {
    console.log('carregando do indexedDb');
    console.log(this.pokemons);
    if (total === 807) {
      console.log('Tem todos os pokemons na local, carregando...');
      const x = [];
      for (let i = 1; i < total; i++){
        x.push(i);
      }

      const pokemons = await this.table.bulkGet(x);
      this.totalCarregado = this.totalCarregado + 807;
      this.listaPokeAtt.next(pokemons); // manda todos pra subscrb
      this.spinner.hide();
      return;
    } else {
      console.log('Não tem todos, carregando e se online, buscando + na API...');
      for (let i = 1; i < total + 1; i++) {
        const pokemon = await this.table.get(i);
        this.pokemons[+pokemon.id - 1] = new Pokemon(
          pokemon.name,
          pokemon.id,
          pokemon['sprite'],
          pokemon['types'],
          pokemon['abilities'],
          pokemon['height'],
          pokemon['weight'],
          pokemon['base_experience'],
          pokemon['forms'],
          pokemon['held_items'],
          pokemon['game_indices'],
          pokemon['is_default'],
          pokemon['location'],
          pokemon['moves'],
          pokemon['order'],
          pokemon['stats'],
          pokemon['species'],
          null
        );
        console.log('pokemon x buscado do indexedDb:', this.pokemons[i]);
        console.log('pokemons na lista pós busca:', this.pokemons);

        if (i === total) {
          this.totalCarregado = i;
          this.listaPokeAtt.next(this.pokemons);
          if (this.onlineOfflineService.isOnline) {
            this.getAllPokemons(
              'https://pokeapi.co/api/v2/pokemon/?offset=' + i + '&limit=100'
            );
          }
          this.spinner.hide();
          return;
        }
      } // fim for
    }
  }

  // IndexedDb related //

  getTest() {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon');
  }

  getAbility(url: string) {
    const headers = new HttpHeaders().set('Accept-Language', ' pt-BR; en-US');
    return this.http.get(url);
  }

  async getAllPokemons(url: string, missing?: boolean) {
    console.log('items on indexeddb:', this.totalItensDb);
    this.spinner.show();
    if (this.onlineOfflineService.isOnline === false) {
      if (this.pokemons.length === 807) {
        this.spinner.hide();
        return;
      } else {
        this.getIndexedDbItens(this.totalItensDb);
      }
    } else {
      if (this.totalItensDb === 807) {
        console.log(this.pokemons.length);
        if (this.pokemons.length === 807) {
          this.spinner.hide();
          return;
        } else {
          this.getIndexedDbItens(807);
        }
      } else {
        console.log('carregando da API');

        this.http
          .get<{
            count: string;
            next: string;
            previous: string;
            results: { name: string; url: string }[];
          }>(url)
          .subscribe((response) => {
            const pokemons: { name: string; url: string }[] = response.results;
            for (const pokemon of pokemons) {
              if (pokemon.url === 'https://pokeapi.co/api/v2/pokemon/807/') {
                this.getPokemon(pokemon.url, null);
                return;
              } else {
                this.getPokemon(pokemon.url, response.next);
              }
            }
          });
      }
    }
  }

  getPokemonById(id) {
    let url = 'https://pokeapi.co/api/v2/pokemon/' + id + '/';
    return this.http.get(url);
  }

  getPokemonSpeciesById(id) {
    const url = 'https://pokeapi.co/api/v2/pokemon-species/' + id + '/';
    return this.http.get(url);
  }

  getPokemon(url: string, proximosPokes) {
    this.http.get<{ name: string; id: number }>(url).subscribe((response) => {
      this.pokemons[+response.id - 1] = new Pokemon(
        response.name,
        response.id,
        response['sprites']['front_default'],
        response['types'],
        response['abilities'],
        response['height'],
        response['weight'],
        response['base_experience'],
        response['forms'],
        response['held_items'],
        response['game_indices'],
        response['is_default'],
        response['location'],
        response['moves'],
        response['order'],
        response['stats'],
        response['species'],
        null
      );
      this.contadorResponse++;
      this.contadorTotal++;
      // t
      // if (this.contadorTotal === 20) {
      //   this.totalCarregado = this.totalCarregado + 20;
      //   this.novosPokesCarregados.next(this.totalCarregado);
      //   this.listaPokeAtt.next(this.pokemons);
      //   console.log(this.pokemons);
      //   this.spinner.hide();
      //   return;
      // }

      // t
      if (this.contadorTotal === 807) {
        this.totalCarregado = this.totalCarregado + 7;
        this.novosPokesCarregados.next(this.totalCarregado);
        this.listaPokeAtt.next(this.pokemons);
        if (this.totalItensDb < 807) {
          console.log('salvando todos');
          this.salvarIndexedDb(this.pokemons);
        }
        this.spinner.hide();
        return;
      }
      if (this.contadorResponse === 100) {
        this.totalCarregado = this.totalCarregado + 100;
        this.novosPokesCarregados.next(this.totalCarregado);
        this.listaPokeAtt.next(this.pokemons);
        this.contadorResponse = 0;

        this.listaPokeAtt.next(this.pokemons);
        if (proximosPokes != null) {
          this.getAllPokemons(proximosPokes);
        }
      }
    });
  }
}
