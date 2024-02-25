import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonErrorComponent } from './components/common-error/common-error.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { IdReaderPipe } from './pipes/id-reader.pipe';
import { SubSectionComponent } from './components/sub-section.component';

const component  = [CommonErrorComponent, HeaderComponent, SubSectionComponent, CustomDatePipe, IdReaderPipe];
@NgModule({
  declarations: component,
  exports: component,
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
