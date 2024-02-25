import { createFeature, createReducer, on } from '@ngrx/store';
import { filmsActions } from './films.actions';
import { FilmsInterface } from '../interfaces/films.interface';

export interface LoadFilm<F> {
  loading: boolean;
  data: F;
  error: string | null | undefined | '';
}
const initialState: LoadFilm<FilmsInterface | null> = {
  loading: false,
  data: null,
  error: null,
};
const loadFileReducer = createFeature({
  name: 'films',
  reducer: createReducer(
    initialState,
    on(filmsActions.details, (state) => ({ ...state, loading: true })),
    on(filmsActions.viewSuccess, (state, actions) => ({
      ...state,
      loading: false,
      data: actions.film,
    })),
    on(filmsActions.filmsError, (state, actions) => ({
      ...state,
      loading: false,
      error: actions.error,
    })),
  ),
});
export const {
  name: fileKeyFeature,
  reducer: filmReducer, selectData, selectLoading, selectError } = loadFileReducer;
