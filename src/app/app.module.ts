import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { appReducer } from './store/app.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,

    StoreModule.forRoot({app: appReducer}),
    StoreDevtoolsModule.instrument({
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      maxAge: 25,
      features: {
        pause: false,
        lock: true,
        persist: true
      }, }),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot()

  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlerInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
