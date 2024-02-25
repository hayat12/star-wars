import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmDetailsComponent } from './film-details.component';
import { Store, StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

describe('FilmDetailsComponent', () => {
  let component: FilmDetailsComponent;
  let fixture: ComponentFixture<FilmDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmDetailsComponent],
      imports: [StoreModule.forRoot({}), RouterTestingModule.withRoutes([])],
      providers: [Store]
    });
    fixture = TestBed.createComponent(FilmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
