import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    console.log('ReversePipe');
    return value.split('').reverse().join('');
  }
}
