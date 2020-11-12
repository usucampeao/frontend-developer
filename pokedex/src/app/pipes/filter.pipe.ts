import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
   transform(items: any[], term: string): any[] {

    if (!items) {
      return [];
    }
    if (!term) {
      return items;
    }
    term = term.toLocaleLowerCase();

    return items.filter(search => {
      return search.name.toLocaleLowerCase().includes(term);
    });
  }
}

