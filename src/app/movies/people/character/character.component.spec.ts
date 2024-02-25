import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComponent } from './character.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { MoviesService } from '../../services/movies.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { MockPeople } from 'src/app/mock/people';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;

  let service: MoviesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), StoreModule.forRoot({}), HttpClientTestingModule],
      declarations: [CharacterComponent],
      providers: [Store]
    });
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MoviesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should get the character details', () => {
    const link = MockPeople.url;
    service.getCharacter(link).subscribe((data) => {
        expect(data).toBeTruthy();
    });
    const mockRequest = httpTestingController.expectOne(link);
    expect(mockRequest.request.method).toBe('GET');
    mockRequest.flush(Object.values(MockPeople));
});

afterEach(() => {
    httpTestingController.verify();
});
});
