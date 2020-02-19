import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Station } from './I-selected-station';
import { tap, timeout} from 'rxjs/operators';
import { SensorData } from './I-sensor-data';


@Injectable({
  providedIn: 'root'
})
export class StationsDataService {
  private getStationsUrl = 'http://api.gios.gov.pl/pjp-api/rest/station/findAll';
  private selectedStationSource = new BehaviorSubject<Station>(null);
  selectedStation$: Station | any = this.selectedStationSource.asObservable();
  closestStations$: Station[] | any;
  constructor(
    private http: HttpClient,
  ) { }
  // how to manage CORS: https://daveceddia.com/access-control-allow-origin-cors-errors-in-angular/
  getStations(): Observable<Station[]> {
    return this.http.get<Station[]>(this.getStationsUrl).pipe(
      // Why it works but VS Code shout its an Object...??
      timeout(5000),
      tap(data => data.sort((a, b) => (a.city.name > b.city.name) ? 1 : ((b.city.name > a.city.name) ? -1 : 0))),
    );
  }
  setSelectedStation(station: Station): void {
    this.selectedStationSource.next(station);
  }
  getStationData(stationId: number) {
      return this.http.get(`http://api.gios.gov.pl/pjp-api/rest/station/sensors/${stationId}`);
  }
  getSensorData(sensorId: number) {
      return this.http.get<SensorData>(`http://api.gios.gov.pl/pjp-api/rest/data/getData/${sensorId}`);
  }
  getStationAQI(stationId: number) {
    return this.http.get(`http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/${stationId}`);
  }
  // come of sensorData.values array have empty arrays...
  searchForLatesValueInSensorData(sensorData: SensorData) {
    for (const reading of sensorData.values) {
      if (typeof reading.value === 'number') {
        return reading.value;
      }
    }
  }
  //                                                METHODS FOR COMPONTNT additional
  // works for stations sorted by city name
  // getAllCities(AllStations: Station[]): string[] {
  //  return AllStations.map(station => station.city.name).filter((city, idx, cities) => {
  //    return !idx || city !== cities[idx - 1];
  //  });
    // return AllStations.filter((station, idx, stations) => {
    //   return !idx || station[idx].city.name !== stations[idx - 1].city.name;
  filterBySelectedVoivodeship(stations: Station[], voivodeship: string): Station[] {
    return stations.filter(station => {
      return station.city.commune.provinceName.toLowerCase() === voivodeship;
    });
  }
  filterCitiesInVoivodeship(stations: Station[]): string[] {
    return stations.map(station => station.city.name).filter((city, idx, cities) => {
      return !idx || city !== cities[idx - 1];
    });
  }
  filterStationsInCity(stations: Station[], selectedCity: string): Station[] {
    return stations.filter(station => station.city.name === selectedCity);
  }
}