import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesService } from '../services/movies.service';
import { filmsActions } from './films.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export const filmsEffect = createEffect(
  (actions$ = inject(Actions), filmsService = inject(MoviesService)) => {
    return actions$.pipe(
      ofType(filmsActions.files),
      switchMap(() =>
        filmsService.getFilms().pipe(
          map((films) => {
            return filmsActions.filmsSuccess({ films });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(filmsActions.filmsError(error.error));
          })
        )
      )
    );
  },
  { functional: true }
);

export const fileEffect = createEffect(
  (actions$ = inject(Actions), filmsService = inject(MoviesService)) => {
    return actions$.pipe(
      ofType(filmsActions.details),
      switchMap((data) =>
        filmsService
          .getFilm(data.id)
          .pipe(map((film) => filmsActions.viewSuccess({ film })))
      )
    );
  },
  { functional: true }
);
export const peopleEffect = createEffect(
  (actions$ = inject(Actions), filmsService = inject(MoviesService)) => {
    return actions$.pipe(
      ofType(filmsActions.character),
      switchMap((data) =>
        filmsService
          .getCharacter(data.link)
          .pipe(
            map((character) => filmsActions.characterSuccess({ character }))
          )
      )
    );
  },
  { functional: true }
);
