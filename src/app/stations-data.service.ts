import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StationsDataService {
  private FIND_STATIONS = 'http://api.gios.gov.pl/pjp-api/rest/station/findAll';
  private FIND_STATIONS_M = '../assets/stations.json';
  constructor(
    private http: HttpClient
  ) { }
  getStations() {
    return this.http.get(this.FIND_STATIONS_M);
    }
}
