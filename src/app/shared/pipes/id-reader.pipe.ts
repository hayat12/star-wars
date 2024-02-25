import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idReader'
})
export class IdReaderPipe implements PipeTransform {

  transform(dynamicLink: string): unknown {
    const match = dynamicLink.match(/\/(\d+)\/$/);
    const id = match ? match[1] : null;
    return id;
  }

}
