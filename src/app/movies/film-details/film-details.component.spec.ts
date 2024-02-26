import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmDetailsComponent } from './film-details.component';
import { Store, StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { MoviesService } from '../services/movies.service';

import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { FILMS } from 'src/app/mock/films';
import { ActivatedRoute } from '@angular/router';
import { MovieState, reducers } from '../store/movie.state';
import { filmsActions } from '../store/films.actions';
import { of } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';

describe('FilmDetailsComponent', () => {
    let component: FilmDetailsComponent;
    let fixture: ComponentFixture<FilmDetailsComponent>;

    let mockActivatedRoute: ActivatedRoute;
    let store: Store<{ movie: MovieState }>;
    const mockFileData = FILMS.results[0];


    let service: MoviesService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {

        mockActivatedRoute = {
            params: of({ id: '4' })
          } as any;

        TestBed.configureTestingModule({
            declarations: [FilmDetailsComponent],
            imports: [
                StoreModule.forRoot({}),
                StoreModule.forFeature('movie', reducers),
                RouterTestingModule.withRoutes([]),
                HttpClientTestingModule,
                SharedModule
            ],
            providers: [
                { provide: ActivatedRoute, useValue: mockActivatedRoute }
            ],
        });
        fixture = TestBed.createComponent(FilmDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(MoviesService);
        store = TestBed.inject(Store);

    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("should dispatch to get film details", ()=>{
        spyOn(store, 'dispatch');
        component.ngOnInit();
        expect(store.dispatch).toHaveBeenCalledWith(filmsActions.details({ id: mockFileData.episode_id+"" }));
    })

    it('should display film details correctly from store', () => {
        store.dispatch(filmsActions.viewSuccess({film: mockFileData}));
        const compiled = fixture.nativeElement;
        fixture.detectChanges();

        const release_date = compiled.querySelector('#release_date').textContent;
        const producer = compiled.querySelector('#producer').textContent;
        const director = compiled.querySelector('#director').textContent;
        const opening_crawl = compiled.querySelector('#opening_crawl').textContent;

        expect(release_date).not.toBeNull();
        expect(producer).toContain(mockFileData.producer);
        expect(director).toContain(mockFileData.director);
        expect(opening_crawl).toContain(mockFileData.opening_crawl);
    });
});
