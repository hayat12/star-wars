import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayLoadingComponent } from './overlay-loading.component';
import { StoreModule } from '@ngrx/store';

describe('OverlayLoadingComponent', () => {
  let component: OverlayLoadingComponent;
  let fixture: ComponentFixture<OverlayLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverlayLoadingComponent],
      imports: [StoreModule.forRoot({})]
    });
    fixture = TestBed.createComponent(OverlayLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
