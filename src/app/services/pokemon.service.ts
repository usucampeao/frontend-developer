import { Injectable, Output } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { OnlineOfflineService } from './online-offline.service';
import Dexie from 'dexie';
import { NotificationsService } from 'angular2-notifications';
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
  firstPokeArray = [];
  secondPokeArray = [];
  firstTime = false;

  private db: Dexie;
  private table: Dexie.Table<Pokemon, any> = null;

  @Output() searchItemSubject: Subject<string> = new Subject<string>();
  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    private onlineOfflineService: OnlineOfflineService,
    public notifications: NotificationsService
  ) {
    if (localStorage.getItem('visitor') === null) {
      this.firstTime = true;
      localStorage.setItem('visitor', 'true');
    }
    this.iniciarIndexedDb();
    this.ouvirStatusConexao();
  }

  // IndexedDb related //
  totalItensDb = 0;
  private async iniciarIndexedDb() {
    this.db = new Dexie('db-pokedex');
    this.db.version(1).stores({ pokemon: '++id' });
    this.table = this.db.table('pokemon');
    this.table
      .count()
      .then((x) => {
        this.totalItensDb = x;
        this.getAllPokemons(
          'https://pokeapi.co/api/v2/pokemon/?limit=100',
          false
        );
      })
      .catch((error) => {
        //
      });
  }
  private async salvarIndexedDb(pokemons: Pokemon[], quantos?: string) {
    if (quantos === 'todos') {
      try {
        await this.table.bulkAdd(pokemons);
        const todosPokemon: Pokemon[] = await this.table.toArray();
        if (todosPokemon.length === 807) {
          this.spinner.hide();
          return;
        }
      } catch (error) {
        return;
      }
    } else {
      const a = this.firstPokeArray.length;
      const b = this.secondPokeArray.length;
      if (a > 0) {
        // pokemons = pokemons.splice(0, this.totalItensDb);
        pokemons.splice(0, this.totalItensDb);
        this.totalItensDb = this.totalItensDb + pokemons.length;
      }
      try {
        await this.table.bulkPut(pokemons);
        const todosPokemon: Pokemon[] = await this.table.toArray();

        this.firstPokeArray = this.secondPokeArray;
        if (todosPokemon.length === 807) {
          this.spinner.hide();
          return;
        }
      } catch (error) {
        return;
      }
    }
  }

  private async enviarIndexedDbParaAPI() {
    const todosPokemon: Pokemon[] = await this.table.toArray();
    for (const pokemon of todosPokemon) {
      // this.salvarAPI(pokemon);
      this.table.delete(pokemon.id);
    }
  }

  private ouvirStatusConexao() {
    this.onlineOfflineService.statusConexao.subscribe((online) => {
      const title = online ? 'Online' : 'Offline';
      const content = online
        ? 'Vamos carregar as imagens agora...'
        : 'Novas imagens não serão mais carregadas...';
      if (online) {
        const toast = this.notifications.success(title, content, {
          timeOut: 10000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
        });
      } else {
        const toast = this.notifications.error(title, content, {
          timeOut: 10000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
        });
      }

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
    const x = [];
    for (let i = 1; i < total + 1; i++) {
      x.push(i);
    }
    if (total === 807) {
      const pokemons = await this.table.bulkGet(x);
      this.totalCarregado = this.totalCarregado + 807;
      this.listaPokeAtt.next(pokemons);
      this.spinner.hide();
      return;
    } else {
      const pokemons = await this.table.bulkGet(x);
      this.totalCarregado = this.totalCarregado + x.length;
      this.pokemons = pokemons;
      this.firstPokeArray = this.pokemons;
      this.listaPokeAtt.next(this.pokemons);

      if (this.onlineOfflineService.isOnline === true) {
        await this.getAllPokemons(
          'https://pokeapi.co/api/v2/pokemon/?offset=' +
            x.length +
            '&limit=100',
          true
        );
      } else {
        this.spinner.hide();
        return;
      }
      this.spinner.hide();
      return;
    }
  }
  // IndexedDb related //

  getAbility(url: string) {
    const headers = new HttpHeaders().set('Accept-Language', ' pt-BR; en-US');
    return this.http.get(url);
  }

  async getAllPokemons(url: string, missing?: boolean) {
    this.spinner.show();
    if (this.onlineOfflineService.isOnline === false) {
      if (this.pokemons.length === 807) {
        this.spinner.hide();
        return;
      } else {
        this.getIndexedDbItens(this.totalItensDb);
      }
    } else {
      if (this.pokemons.length === 807) {
        this.spinner.hide();
        return;
      } else if (this.totalItensDb > 0 && missing === false) {
        this.getIndexedDbItens(this.totalItensDb);
        return;
      } else if (this.totalItensDb > 0 && missing === true) {
        this.http
          .get<{
            count: string;
            next: string;
            previous: string;
            results: { name: string; url: string }[];
          }>(url)
          .subscribe((response) => {
            if (missing === true) {
              //
            }
            const pokemons: { name: string; url: string }[] = response.results;
            for (const pokemon of pokemons) {
              if (pokemon.url === 'https://pokeapi.co/api/v2/pokemon/807/') {
                this.getPokemon(pokemon.url, null, missing);
                return;
              } else {
                this.getPokemon(pokemon.url, response.next, missing);
              }
            }
          });
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
                this.getPokemon(pokemon.url, null, missing);
                return;
              } else {
                this.getPokemon(pokemon.url, response.next, missing);
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
  getPokemon(url: string, proximosPokes, missing?: boolean) {
    this.http.get<{ name: string; id: number }>(url).subscribe((response) => {
      if (missing === true) {
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
      } else {
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
      }

      this.contadorResponse++;
      this.contadorTotal++;
      if (this.contadorTotal === 807) {
        this.totalCarregado = this.totalCarregado + 7;
        if (this.totalItensDb < 807) {
          this.salvarIndexedDb(this.pokemons, 'semi');
        }
        this.novosPokesCarregados.next(this.totalCarregado);
        this.listaPokeAtt.next(this.pokemons);
        this.spinner.hide();
        return;
      }
      if (this.contadorResponse === 100) {
        this.totalCarregado = this.totalCarregado + 100;
        if (this.totalItensDb < 807) {
          this.salvarIndexedDb(this.pokemons, 'semi');
        }
        this.novosPokesCarregados.next(this.totalCarregado);
        this.listaPokeAtt.next(this.pokemons);
        this.contadorResponse = 0;

        this.listaPokeAtt.next(this.pokemons);
        if (proximosPokes != null) {
          this.getAllPokemons(proximosPokes, missing);
        }
      }
      //
    });
  }
}
