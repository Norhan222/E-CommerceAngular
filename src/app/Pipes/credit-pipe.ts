import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'credit'
})
export class CreditPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    if (!value) return '';
    const groups = value.match(/.{1,4}/g);

    return groups ? groups.join(' - ') : value;
  }

}
