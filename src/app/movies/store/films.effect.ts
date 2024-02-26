import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesService } from '../services/movies.service';
import { filmsActions } from './films.actions';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { MovieState } from './movie.state';

export const filmsEffect = createEffect(
    (
        actions$ = inject(Actions),
        filmsService = inject(MoviesService),
        store = inject(Store)
    ) => {
        return actions$.pipe(
            ofType(filmsActions.films, filmsActions.searchFilms),
            withLatestFrom(
                store.select(
                    (state: { movie: MovieState }) =>
                        state.movie.filmsKeyFeature
                )
            ),
            switchMap(([filers, filmsState]) => {
                if(!!filmsActions.searchFilms){
                    return filmsService.getFilms(filers.filter).pipe(
                    map((films) => {
                        return filmsActions.filmsSuccess({ films });
                    }),
                    catchError((error: HttpErrorResponse) => {
                        return of(filmsActions.filmsError(error.error));
                    })
                );
                }
                if (filmsState.data) {
                    return of(
                        filmsActions.filmsSuccess({ films: filmsState.data })
                    );
                }
                return filmsService.getFilms(filers.filter).pipe(
                    map((films) => {
                        return filmsActions.filmsSuccess({ films });
                    }),
                    catchError((error: HttpErrorResponse) => {
                        return of(filmsActions.filmsError(error.error));
                    })
                );
            })
        );
    },
    { functional: true }
);

export const fileEffect = createEffect(
    (
        actions$ = inject(Actions),
        filmsService = inject(MoviesService),
        store = inject(Store)
    ) => {
        return actions$.pipe(
            ofType(filmsActions.details),
            withLatestFrom(
                store.select(
                    (state: { movie: MovieState }) =>
                        state.movie.filmsKeyFeature
                )
            ),
            switchMap(([data, filmsState]) => {
                if (filmsState.data != null) {
                    return of(
                        filmsActions.viewSuccess({
                            film:
                                filmsState.data.results.find(
                                    (o) => o.episode_id == Number(data.id)
                                ) || null,
                        })
                    );
                }
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
