import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CityFilterPipe'
})
export class CityFilterPipe implements PipeTransform {

  transform(cities: string[], cityTerm: string): any {
    return !cities || !cityTerm ? cities : (cities
      .filter(city => city.toLowerCase().startsWith(cityTerm.toLowerCase())));
  }
}
