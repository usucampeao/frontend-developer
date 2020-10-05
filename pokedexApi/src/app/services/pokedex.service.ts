import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Pokemon } from './../models/pokemon';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PokedexService {

  constructor(private _snackBar: MatSnackBar, private _http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this._snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  handleError(e: any): Observable<any> {
    console.log(e);
    this.showMessage('An error has occurred!', true);
    return EMPTY;
  }


  getAll(): Observable<Pokemon[]> {
    return this._http.get<Pokemon[]>(environment.baseUrl).pipe(
      map(obj => obj),
      catchError((error) => this.handleError(error))
    );
  }

  get(id: string): Observable<Pokemon> {
    const url = `${environment.baseUrl}/${id}`;
    return this._http.get<Pokemon>(url).pipe(
      map(obj => obj),
      catchError((error) => this.handleError(error))
    );
  }


  // searchPokemonById(id: number) {
  //   return this._http.get<Pokemon>(`${environment.baseUrl}/${id}`);
  //  }
}
