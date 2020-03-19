import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'VoivodeshipFilterPipe'
})
export class VoivodeshipFilterPipe implements PipeTransform {

    transform(voivodeshipArray: string[], searchTerm: string): any {
      return !voivodeshipArray || !searchTerm ? voivodeshipArray : (voivodeshipArray
              .filter(str => str.toLowerCase().startsWith(searchTerm.toLowerCase())));
  }
}