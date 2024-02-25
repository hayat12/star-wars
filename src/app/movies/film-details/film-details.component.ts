import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { filmsActions } from '../store/films.actions';
import { MovieState } from '../store/movie.state';

@Component({
  selector: 'sw-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.sass'],
})
export class FilmDetailsComponent implements OnInit {
  data$ = this.store.select((state) => state.movie.fileKeyFeature);
  constructor(
    private route: ActivatedRoute,
    private store: Store<{ movie: MovieState }>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: ({ id }) => {
        this.store.dispatch(filmsActions.details({ id }));
      },
    });
  }

}
