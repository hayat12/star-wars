import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { filmsActions } from '../store/films.actions';
import { FilmsFilterInterface } from '../interfaces/films-filter.interface';
import { MovieState } from '../store/movie.state';

@Component({
    selector: 'sw-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
    @ViewChild('search') searchInput!: ElementRef<HTMLInputElement>;

    filters: FilmsFilterInterface = { page: 1, search: '' };
    data$ = this.store.select((state) => state.movie.filmsKeyFeature);
    constructor(private store: Store<{ movie: MovieState }>) {}

    ngOnInit(): void {
        this.store.dispatch(filmsActions.films({ filter: this.filters }));
    }

    onSearch(term: string): void {
        this.filters = {
            ...this.filters,
            search: term,
        };
        this.ngOnInit();
    }
}
