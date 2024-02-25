import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesService } from '../services/movies.service';
import { filmsActions } from './films.actions';
import { catchError, filter, map, of, switchMap, withLatestFrom } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { MovieState } from './movie.state';
import { RouterLinkActive } from '@angular/router';

export const filmsEffect = createEffect(
    (actions$ = inject(Actions), filmsService = inject(MoviesService), store = inject(Store<{ movie: MovieState }>)) => {
        return actions$.pipe(
            ofType(filmsActions.films),
            switchMap((filers) =>
                filmsService.getFilms(filers.filter).pipe(
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
            switchMap((data) => {
                return filmsService
                    .getFilm(Number(data.id))
                    .pipe(map((film) => filmsActions.viewSuccess({ film })));
            })
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
                        map((character) =>
                            filmsActions.characterSuccess({ character })
                        )
                    )
            )
        );
    },
    { functional: true }
);
