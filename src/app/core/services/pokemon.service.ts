import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {Pokemon} from "../models/pokemon.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly BASE_URL = environment.pokemonApi;

  constructor(private http: HttpClient) { }
  getPokemons(offset: number, limit: number): Observable<Pokemon[]> {
    const params = new HttpParams()
      .set('offset', offset.toString())
      .set('limit', limit.toString());

    return this.http
      .get<any>(`${this.BASE_URL}/pokemon`, { params })
      .pipe(
        map((response) => {
          return response.map((item: any) => {
            return {
              id: item.id,
              name: item.name,
              image: item.image,
            } as Pokemon;
          });
        }),
        catchError(this.handleError)
      );
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http
      .get<Pokemon>(`${this.BASE_URL}/pokemon/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error:', error);
    return throwError('Try again later');
  }
}
