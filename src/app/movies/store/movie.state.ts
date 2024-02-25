// app.state.ts

import { ActionReducerMap } from '@ngrx/store';
import { LoadFilm, filmReducer } from './film.reducers';
import { LoadFilms, filmsReducer } from './films.reducers';
import { FilmsInterface } from '../interfaces/films.interface';
import { CharacterInterface } from '../interfaces/character.interface';
import { characterReducer } from './character.reducer';
export interface MovieState {
  filmsKeyFeature: LoadFilms<ReadonlyArray<FilmsInterface>>;
  fileKeyFeature: LoadFilm<FilmsInterface | null>;
  characterKeyFeature: LoadFilms<CharacterInterface | null>;
}

export const reducers: ActionReducerMap<MovieState> = {
  filmsKeyFeature: filmsReducer,
  fileKeyFeature: filmReducer,
  characterKeyFeature: characterReducer,
};
