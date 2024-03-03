import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number | null | undefined, currencyCode: string = 'USD'): string {
    if (value == null) {
      return ''; // or handle it as per your requirement
    }

    const formattedValue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode
    }).format(value);

    return formattedValue;
  }
}
