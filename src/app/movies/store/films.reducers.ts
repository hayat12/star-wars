import { createFeature, createReducer, on } from '@ngrx/store';
import { filmsActions } from './films.actions';
import { FilmsInterface } from '../interfaces/films.interface';
import { Pagination } from 'src/app/shared/interfaces/pagination.interface';

export interface LoadFilms<F> {
  loading: boolean;
  data: F | null;
  error: string | null | undefined | '';
}
const initialState: LoadFilms<Pagination<FilmsInterface>> = {
  loading: false,
  data: null,
  error: null,
};
const loadFilmReducer = createFeature({
  name: 'films',
  reducer: createReducer(
    initialState,
    on(filmsActions.films, (state) => ({ ...state, loading: true })),
    on(filmsActions.filmsSuccess, (state, actions) => ({
      ...state,
      loading: false,
      data: actions.films,
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
