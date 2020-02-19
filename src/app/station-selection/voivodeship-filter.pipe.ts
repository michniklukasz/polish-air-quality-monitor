import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'VoivodeshipFilterPipe'
})
export class VoivodeshipFilterPipe implements PipeTransform {

    transform(voivodeshipArray: string[], searchTerm: string): any {
      return !voivodeshipArray || !searchTerm ? voivodeshipArray : (voivodeshipArray
              .filter(str => str.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1));
  }

}

// czy jak pisze np D w input to tez zadziala?
// jak sprawdzic zeby kolejnosc miala znaczenie?