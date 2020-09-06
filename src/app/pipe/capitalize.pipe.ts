import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.substr(1);
  }
}

// Ao ser chamada, lê a string e transforma toda a string em maiúscula