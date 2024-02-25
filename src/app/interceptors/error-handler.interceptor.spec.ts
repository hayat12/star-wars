import { TestBed } from '@angular/core/testing';

import { ErrorHandlerInterceptor } from './error-handler.interceptor';
import { Store, StoreModule } from '@ngrx/store';

describe('ErrorHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [StoreModule.forRoot({})],
    providers: [
      ErrorHandlerInterceptor,
      Store
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorHandlerInterceptor = TestBed.inject(ErrorHandlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
