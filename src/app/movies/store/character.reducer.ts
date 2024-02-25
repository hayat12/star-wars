import { createFeature, createReducer, on } from '@ngrx/store';
import { filmsActions } from './films.actions';
import { CharacterInterface } from '../interfaces/character.interface';

export interface LoadCharacter<T> {
  loading: boolean;
  data: T | null;
  error: string | null | undefined | '';
}
const initialState: LoadCharacter<CharacterInterface | null> = {
  loading: false,
  data: null,
  error: null,
};
const loadCharacterReducer = createFeature({
  name: 'character',
  reducer: createReducer(
    initialState,
    on(filmsActions.character, (state) => ({ ...state, loading: true })),
    on(filmsActions.characterSuccess, (state, actions) => ({
      ...state,
      loading: false,
      data: actions.character,
    })),
    on(filmsActions.filmsError, (state, actions) => ({
      ...state,
      loading: false,
      error: actions.error,
    })),
  ),
});
export const {
  name: characterKeyFeature,
  reducer: characterReducer, selectData, selectLoading, selectError } = loadCharacterReducer;
