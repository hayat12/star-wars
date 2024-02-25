import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sw-common-error',
  templateUrl: './common-error.component.html',
  styleUrls: ['./common-error.component.sass'],
})
export class CommonErrorComponent {
  @Input({required: true}) error: string = "";
}
