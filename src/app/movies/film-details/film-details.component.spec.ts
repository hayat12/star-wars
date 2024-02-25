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

describe('FilmDetailsComponent', () => {
    let component: FilmDetailsComponent;
    let fixture: ComponentFixture<FilmDetailsComponent>;

    let service: MoviesService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FilmDetailsComponent],
            imports: [
                StoreModule.forRoot({}),
                RouterTestingModule.withRoutes([]),
                HttpClientTestingModule,
            ],
            providers: [Store],
        });
        fixture = TestBed.createComponent(FilmDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(MoviesService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get the movie details', () => {
        const id = FILMS.results.at(0)?.episode_id || 0;
        service.getFilm(id).subscribe((data) => {
            expect(data).toBeTruthy();
        });
        const mockRequest = httpTestingController.expectOne(
            `${service.endPoint}/films/${id}`
        );
        expect(mockRequest.request.method).toBe('GET');
        mockRequest.flush(Object.values(FILMS.results[0]));
    });

    afterEach(() => {
        httpTestingController.verify();
    });
});
