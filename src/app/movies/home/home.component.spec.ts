import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import { MoviesService } from '../services/movies.service';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { FILMS } from 'src/app/mock/films';
import { FilmsFilterInterface } from '../interfaces/films-filter.interface';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    let service: MoviesService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [StoreModule.forRoot({}), HttpClientTestingModule],
            providers: [MoviesService],
        });
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(MoviesService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get movies', () => {
        const filter:FilmsFilterInterface = {page: 1, search: ""}
        service.getFilms(filter).subscribe((data)=>{
            expect(data).toBeTruthy();
        })
        const mockRequest = httpTestingController.expectOne(`${service.endPoint}/films?page=1&search=`)
        expect(mockRequest.request.method).toBe("GET");
        mockRequest.flush(Object.values(FILMS))
    });
});
