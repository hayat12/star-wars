import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Success } from 'src/app/store/app.actions';

@Component({
  selector: 'sw-overlay-loading',
  templateUrl: './overlay-loading.component.html',
  styleUrls: ['./overlay-loading.component.sass']
})
export class OverlayLoadingComponent {
    data$ = this.store.select((state)=>state)
    constructor(private store:Store<AppState<Success | Error>>){}
}
