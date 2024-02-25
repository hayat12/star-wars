import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import { MoviesService } from '../services/movies.service';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { FILMS } from 'src/app/mock/films';

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
        service.getFilms().subscribe((data)=>{
            expect(data).toBeTruthy();
        })
        const mockRequest = httpTestingController.expectOne(`${service.endPoint}/films`);
        expect(mockRequest.request.method).toBe("GET");
        mockRequest.flush(Object.values(FILMS))
    });
});
