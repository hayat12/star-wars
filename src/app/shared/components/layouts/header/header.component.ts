import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { filmsActions } from 'src/app/movies/store/films.actions';

@Component({
  selector: 'sw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  constructor(private store: Store) {}


  onSearch(search:string = "") {
    this.store.dispatch(
      filmsActions.files({ filter: { page: 1, search } })
    );
  }
}
