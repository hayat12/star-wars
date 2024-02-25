import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { LoadFilms, selectData } from '../store/films.reducers';
import { filmsActions } from '../store/films.actions';
import { FilmsFilterInterface } from '../interfaces/films-filter.interface';
import { FilmsInterface } from '../interfaces/films.interface';
import { MovieState } from '../store/movie.state';

@Component({
  selector: 'sw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{
  filters:FilmsFilterInterface = {page: 1, search: ""}
  data$ = this.store.select((state)=>state.movie.filmsKeyFeature);
  constructor(private store: Store<{"movie": MovieState}>){}

  ngOnInit(): void {
    this.store.dispatch(filmsActions.files({filter: this.filters}))
  }
}
