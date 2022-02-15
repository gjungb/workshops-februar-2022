import { Pipe, PipeTransform } from '@angular/core';
/* @ts-ignore */
import * as ISBN from 'isbn3';

/**
 * 
 */
@Pipe({
  name: 'bmIsbn'
})
export class BmIsbnPipe implements PipeTransform {

  /**
   * 
   * @param value 
   * @returns 
   */
  transform(value = ''): string {
    return ISBN.asIsbn13(value, true);
  }

}
