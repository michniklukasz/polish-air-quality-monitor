import { Pipe, PipeTransform } from '@angular/core';
import { Station } from '../I-selected-station';

@Pipe({
  name: 'CityFilterPipe'
})
export class CityFilterPipe implements PipeTransform {

  transform(cities: string[], cityTerm: string): any {
    return !cities || !cityTerm ? cities : (cities.filter(city => city.toLowerCase().indexOf(cityTerm.toLowerCase()) !== -1));
  }
}
