import { Pipe, PipeTransform } from '@angular/core';
import { AppConstants } from '../constants/AppConstants';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(date: unknown, format:string = AppConstants.DATA_TIME_FORMATS.FULL_DATE): string {
    console.log(date)
    const newDate = date? date: new Date();
    return `date | ${newDate} : ${new Date()} : ${format}`;
  }

}
