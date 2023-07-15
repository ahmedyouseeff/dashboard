import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'needZero',
})
export class NeedZeroPipe implements PipeTransform {
  transform(value: number) {
    if (value < 10) return '0' + value;
    return value;
  }
}
