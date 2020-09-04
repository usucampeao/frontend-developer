
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getPkmn() :Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1050`);
  }

  public getIdPkmn() :Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/`)
  }

}
