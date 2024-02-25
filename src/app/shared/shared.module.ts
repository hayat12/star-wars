import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonErrorComponent } from './components/common-error/common-error.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { IdReaderPipe } from './pipes/id-reader.pipe';

const component  = [CommonErrorComponent, HeaderComponent, FooterComponent, CustomDatePipe, IdReaderPipe];
@NgModule({
  declarations: component,
  exports: component,
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
