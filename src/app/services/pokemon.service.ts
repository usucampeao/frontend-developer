import { Injectable, Output } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
    this.totalItensDb = await this.table.count();
    this.getAllPokemons('https://pokeapi.co/api/v2/pokemon/?limit=100');
  }
  private async salvarIndexedDb(pokemon: Pokemon) {
    try {
      await this.table.add(pokemon);
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
        this.getAllPokemons('https://pokeapi.co/api/v2/pokemon/?limit=100');
      } else {
        this.getAllPokemons('https://pokeapi.co/api/v2/pokemon/?limit=100');
      }
    });
  }

  async getIndexedDbCount() {
    console.log('passou aqui 1');
    await this.table.count().then((x) => {
      if (x > 0) {
        console.log('passou aqui 2');
        this.getIndexedDbItens(x);
      }
    });
  }

  async getIndexedDbItens(total: number) {
    for (let i = 1; i < total+1; i++) {
      const pokemon = await this.table.get(i);
      this.pokemons[+pokemon.id -1] = new Pokemon(
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
        pokemon['species']
      );
      console.log(this.pokemons)
      this.contadorTotal++;
      console.log(this.contadorTotal)

      // t
      if (this.contadorTotal === 807) {
        this.totalCarregado = this.totalCarregado + 807;
        this.novosPokesCarregados.next(this.totalCarregado);
        this.listaPokeAtt.next(this.pokemons);
        console.log(this.pokemons);
        this.spinner.hide();
        return;
      }
      // if (i === total){
      //   this.listaPokeAtt.next(this.pokemons);
      //   this.spinner.hide();
      // }
    }
    
  }

  // IndexedDb related //

  getTest() {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon');
  }

  getAbility(url: string) {
    return this.http.get(url);
  }

  async getAllPokemons(url: string) {
    console.log(this.totalItensDb)
    this.spinner.show();
    if (!this.onlineOfflineService.isOnline) {
      this.getIndexedDbCount();
    } else {
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
        response['species']
      );
      if (this.totalItensDb < 807){
      this.salvarIndexedDb(this.pokemons[+response.id - 1]);
    }
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
