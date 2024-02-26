import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComponent } from './character.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { MoviesService } from '../../services/movies.service';
import {
    HttpTestingController,
    HttpClientTestingModule,
} from '@angular/common/http/testing';
import { MockPeople } from 'src/app/mock/people';
import { ActivatedRoute } from '@angular/router';
import { MovieState, reducers } from '../../store/movie.state';
import { filmsActions } from '../../store/films.actions';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubSectionComponent } from 'src/app/shared/components/sub-section.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('CharacterComponent', () => {
    let component: CharacterComponent;
    let fixture: ComponentFixture<CharacterComponent>;

    let mockActivatedRoute: ActivatedRoute;
    let store: Store<{ movie: MovieState }>;
    const mockCharacterData = MockPeople;
    const mockLink = `${environment.endPoint}/5`;

    let service: MoviesService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        mockActivatedRoute = {
            params: of({ link: mockLink }),
        } as any;

        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([]),
                StoreModule.forRoot({}),
                StoreModule.forFeature('movie', reducers),
                HttpClientTestingModule,
                SharedModule,
            ],
            declarations: [CharacterComponent],
            providers: [
                { provide: ActivatedRoute, useValue: mockActivatedRoute },
            ],
        });
        fixture = TestBed.createComponent(CharacterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(MoviesService);
        store = TestBed.inject(Store);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should dispatch character details', () => {
        // service.getCharacter(link).subscribe((data) => {
        //     expect(data).toBeTruthy();
        // });
        // const mockRequest = httpTestingController.expectOne(link);
        // expect(mockRequest.request.method).toBe('GET');
        // mockRequest.flush(Object.values(mockCharacterData));

        spyOn(store, 'dispatch');
        component.ngOnInit();
        expect(store.dispatch).toHaveBeenCalledWith(
            filmsActions.character({ link: mockLink })
        );
    });

    it('should display character details correctly from store', () => {
        store.dispatch(
            filmsActions.characterSuccess({ character: mockCharacterData })
        );
        const compiled = fixture.nativeElement;
        fixture.detectChanges();

        const name = compiled.querySelector('#name').textContent;
        const birth_year = compiled.querySelector('#birth_year').textContent;
        const gender = compiled.querySelector('#gender').textContent;
        const height = compiled.querySelector('#height').textContent;
        const mass = compiled.querySelector('#mass').textContent;
        const hair_color = compiled.querySelector('#hair_color').textContent;
        const skin_color = compiled.querySelector('#skin_color').textContent;
        const eye_color = compiled.querySelector('#eye_color').textContent;

        expect(name).toContain(mockCharacterData.name);
        expect(birth_year).toContain(mockCharacterData.birth_year);
        expect(gender).toContain(mockCharacterData.gender);
        expect(height).toContain(mockCharacterData.height);
        expect(mass).toContain(mockCharacterData.mass);
        expect(hair_color).toContain(mockCharacterData.hair_color);
        expect(skin_color).toContain(mockCharacterData.skin_color);
        expect(eye_color).toContain(mockCharacterData.eye_color);
    });
});
