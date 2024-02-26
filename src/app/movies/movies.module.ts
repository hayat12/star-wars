import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as filmsEffects from './store/films.effect';
import { SharedModule } from '../shared/shared.module';
import { FilmComponent } from './home/film/film.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { CharacterComponent } from './people/character/character.component';
import { reducers } from './store/movie.state';

@NgModule({
    declarations: [
        HomeComponent,
        FilmComponent,
        FilmDetailsComponent,
        CharacterComponent,
    ],
    imports: [
        HttpClientModule,
        SharedModule,
        CommonModule,
        StoreModule.forFeature('movie', reducers),
        EffectsModule.forFeature(filmsEffects),
        MoviesRoutingModule,
    ],
})
export class MoviesModule {}
