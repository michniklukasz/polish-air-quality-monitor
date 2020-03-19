import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Station } from './I-selected-station';
import { map, tap, timeout} from 'rxjs/operators';
import { SensorData } from './I-sensor-data';
import { Sensor } from './I-sensor';
import { IndexLevel } from './I-index-level';


@Injectable({
  providedIn: 'root'
})
export class StationsDataService {
  // ----------------------------------------URL TO GIOS-API DATA----------------------------------------------
  private STATIONS_URL = 'http://api.gios.gov.pl/pjp-api/rest/station/findAll';
  private STATION_DATA_URL = 'http://api.gios.gov.pl/pjp-api/rest/station/sensors/';
  private SENSOR_DATA_URL = 'http://api.gios.gov.pl/pjp-api/rest/data/getData/';
  private STATION_AQI = 'http://api.gios.gov.pl/pjp-api/rest/aqindex/getIndex/';
  // ----------------------------------------SETING BEHAVIORAL SUBJECT-----------------------------------------
  private selectedStationSource = new BehaviorSubject<Station>(null);
  public selectedStation$: Station | any = this.selectedStationSource.asObservable();
  constructor(
    private http: HttpClient,
  ) {}
  // -----------------------------------API REQUEST METHODS TO GIOS-API----------------------------------------
  getStations(): Observable<Station[]> {
    return this.http.get<Station[]>(this.STATIONS_URL).pipe(
      // Why it works but VS Code shout its an Object...??
      timeout(5000),
      tap(data => data.sort((a, b) => (a.city.name > b.city.name) ? 1 : ((b.city.name > a.city.name) ? -1 : 0))),
    );
  }
  getStationData(stationId: number): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.STATION_DATA_URL + stationId);
  }
  getSensorData(sensorId: number) {
    return this.http.get<SensorData>(this.SENSOR_DATA_URL + sensorId);
  }
  getStationAQI(stationId: number): Observable<any> {
    return this.http.get<any>(this.STATION_AQI + stationId).pipe(
      map(res => res.stIndexLevel)
    );
  }
  // ----------------------------------------------OTHER METHODS-----------------------------------------------
  // used in stations-data.ts to prevent null readings from station sensor;
  // sometimes sensor reading in latest array of sensorData.values is empty, method prevent displaying null value
  // method search for most recent array with value from sensor reading
  searchForLatesValueInSensorData(sensorData: SensorData) {
    // reading is an array
    for (const reading of sensorData.values) {
      if (Number.isFinite(reading.value)) {
        return Number(reading.value.toFixed(1));
      }
    }
  }
  // sets behavioral subject value through components
  setSelectedStation(station: Station): void {
    this.selectedStationSource.next(station);
  }
}