import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pagination } from 'src/app/shared/interfaces/pagination.interface';
import { FilmsInterface } from '../interfaces/films.interface';
import { environment } from 'src/environments/environment.development';
import { CharacterInterface } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  readonly endPoint:string = environment.endPoint;

  constructor(private http:HttpClient) { }

  getFilms():Observable<Pagination<FilmsInterface>>{
    return this.http.get<Pagination<FilmsInterface>>(`${this.endPoint}/films`).pipe(
      map((response)=>response)
      );
  }

  getFilm(id:string):Observable<FilmsInterface>{
    return this.http.get<FilmsInterface>(`${this.endPoint}/films/${id}`)
    .pipe(
      map((response)=>response)
      );
  }

  getCharacter(link:string):Observable<CharacterInterface>{
    return this.http.get<CharacterInterface>(`${link}`)
    .pipe(
      map((response)=>response)
      );
  }
}
