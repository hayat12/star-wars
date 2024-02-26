import { createSelector } from '@ngrx/store';
import { MovieState } from './movie.state';

export const selectMovies = (state: MovieState) => state.filmsKeyFeature;
export const selectMovie = (state: MovieState) => state.fileKeyFeature;

export const selectFilmsProperty = createSelector(
    selectMovies,
    (state) => state
);
export const selectFilmProperty = createSelector(
    selectMovies,
    (state) => state
);
