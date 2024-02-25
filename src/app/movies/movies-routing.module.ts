import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { CharacterComponent } from './people/character/character.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: FilmDetailsComponent },
  { path: 'character/:link', component: CharacterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
