import { createActionGroup, props } from '@ngrx/store';
import { Pagination } from 'src/app/shared/interfaces/pagination.interface';
import { FilmsInterface } from '../interfaces/films.interface';
import { FilmsFilterInterface } from '../interfaces/films-filter.interface';
import { CharacterInterface } from '../interfaces/character.interface';

export const filmsActions = createActionGroup({
    source: 'film',
    events: {
        films: props<{ filter: FilmsFilterInterface }>(),
        searchFilms: props<{ filter: FilmsFilterInterface }>(),
        'films success': props<{ films: Pagination<FilmsInterface> }>(),
        'films error': props<{ error: string | null | undefined }>(),
        details: props<{ id: string }>(),
        character: props<{ link: string }>(),
        'view success': props<{ film: FilmsInterface | null }>(),
        'character success': props<{ character: CharacterInterface }>(),
    },
});
