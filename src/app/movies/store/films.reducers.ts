import { createFeature, createReducer, on } from '@ngrx/store';
import { filmsActions } from './films.actions';
import { FilmsInterface } from '../interfaces/films.interface';

export interface LoadFilms<F> {
  loading: boolean;
  data: F;
  error: string | null | undefined | '';
}
const initialState: LoadFilms<ReadonlyArray<FilmsInterface>> = {
  loading: false,
  data: [],
  error: null,
};
const loadFilmReducer = createFeature({
  name: 'films',
  reducer: createReducer(
    initialState,
    on(filmsActions.files, (state) => ({ ...state, loading: true })),
    on(filmsActions.filmsSuccess, (state, actions) => ({
      ...state,
      loading: false,
      data: actions.films.results,
    })),
    on(filmsActions.filmsError, (state, actions) => ({
      ...state,
      loading: false,
      error: actions.error,
    })),
  ),
});
export const {
  name: filmsKeyFeature,
  reducer: filmsReducer,
  selectFilmsState, selectData, selectError, selectLoading } =
  loadFilmReducer;
