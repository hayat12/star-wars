import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Error, Success } from 'src/app/store/app.actions';

@Component({
  selector: 'sw-common-error',
  templateUrl: './common-error.component.html',
  styleUrls: ['./common-error.component.sass'],
})
export class CommonErrorComponent {
    data$ = this.store.select((state)=>state.app);
    constructor(private store: Store<{app: AppState<Success| Error>}>){}
    // @Input({required: true}) error: string = "";
}
