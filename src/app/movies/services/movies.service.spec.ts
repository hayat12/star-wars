import { TestBed } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import { HttpClientModule } from '@angular/common/http';
import { FilmsFilterInterface } from '../interfaces/films-filter.interface';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FILMS } from 'src/app/mock/films';
import { MockPeople } from 'src/app/mock/people';
describe('MoviesService', () => {
    let service: MoviesService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, HttpClientTestingModule],
        });
        service = TestBed.inject(MoviesService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get all the movies', () => {
        const mockFilter:FilmsFilterInterface = {page: 1, search: ""}
        service.getFilms(mockFilter).subscribe((data) => {
            expect(data).toBeTruthy();
        });
        const mockRequest = httpTestingController.expectOne(`${service.endPoint}/films?page=1&search=`);
        expect(mockRequest.request.method).toBe('GET');
    });

    it('should get movie details', () => {
        const id = FILMS.results[0].episode_id;
        service.getFilm(id).subscribe((data) => {
            expect(data).toBeTruthy();
        });
        const mockRequest = httpTestingController.expectOne(
            `${service.endPoint}/films/${id}`
        );
        expect(mockRequest.request.method).toBe('GET');
        mockRequest.flush(Object.values(FILMS.results[0]));
    });

    it('should get the character details', () => {
        const link = FILMS.results[0].characters[4];
        service.getCharacter(link).subscribe((data) => {
            expect(data).toBeTruthy();
        });
        const mockRequest = httpTestingController.expectOne(link);
        expect(mockRequest.request.method).toBe('GET');
        mockRequest.flush(Object.values(MockPeople));
    });
});
