import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { appActions } from '../store/app.actions';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.store.dispatch(appActions.request({ api: request.url }));
    return next.handle(request).pipe(
    tap((event)=>{
        if (event instanceof HttpResponse) {
            this.store.dispatch(
                appActions.appSuccess({
                  success: { message: 'Success', api: request.url, status: 200 },
                })
              )
        }
    }),
      tap({
        error: (request: HttpErrorResponse) => {
            switch(request.status){
                case 404:
                    this.store.dispatch(
                        appActions.appError({
                          error: {
                            message: "API not fount",
                            api: request.url,
                            status: request.status,
                          },
                        })
                      );
                    break;
                case 500:
                    this.store.dispatch(
                        appActions.appError({
                          error: {
                            message: Object.keys(request.error).toString(),
                            api: request.url,
                            status: request.status,
                          },
                        })
                      );
                    break;
            }
        },
      }),
    );
  }
}
