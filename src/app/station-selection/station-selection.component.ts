import { Component, OnInit } from '@angular/core';
import { StationsDataService } from '../stations-data.service';
import { Station } from '../I-selected-station';
import { Router } from '@angular/router';
import { voivodeships } from '../hand-held-data';
import { TopBarService } from '../top-bar.service';

@Component({
  selector: 'app-station-selection',
  templateUrl: './station-selection.component.html',
  styleUrls: ['./station-selection.component.css']
})
export class StationSelectionComponent implements OnInit {
  // ------------------------------------ALL STATIONS FORM GIOS API OR WEB STORAGE API -------------------
  stations: Station[];
  // -------------------------------------------VOIVODESHIP SELECTION VARIABLES---------------------------
  voivodeships: string[] = voivodeships;
  voivodeshipTerm: string;
  selectedVoivodeship: string;
  // -------------------------------------------CITY SELECTION VARIABLES----------------------------------
  cities: string[];
  cityTerm: string;
  selectedCity: string;
  // ----------------------------------------------SETTED ACORDING TO USER INPUT--------------------------
  // selected station
  selectedStation$: Station;
  // filtered array of all stations, represents stations in selected voivodeship
  stationsInVoivodeship: Station[];
  // filtered stationsInVoivodeship, represents stations in seleted city
  stationsInCity: Station[];
  constructor(
    private stationsData: StationsDataService,
    private router: Router,
    private topBar: TopBarService,
  ) {
    // setting initial values
    this.selectedVoivodeship = undefined;
    this.selectedCity = undefined;
    this.cityTerm = '';
    // this.voivodeshipTerm = '';
  }
  // -------------------------------------------VOIVODESHIP SELECTION METHODS-----------------------------------
  private filterBySelectedVoivodeship(stations: Station[], voivodeship: string): Station[] {
    return stations.filter(station => {
      return station.city.commune.provinceName.toLowerCase() === voivodeship;
    });
  }
  private removeDuplicateCitiesInVoivodeship(stations: Station[]): string[] {
    return stations.map(station => station.city.name).filter((city, idx, cities) => {
      return !idx || city !== cities[idx - 1];
    });
  }
  getSelectedVoivodeship(voivodeship: string): void {
    // sets selected voivodeship by User in input
    this.selectedVoivodeship = voivodeship;
    // return new array with stations in selected voivodeship
    this.stationsInVoivodeship = this.filterBySelectedVoivodeship(this.stations, voivodeship);
    // create new array with city names,
    // if more than one station in city -> removes duplicating city names from array
    this.cities = this.removeDuplicateCitiesInVoivodeship(this.stationsInVoivodeship);
  }
   // removes previous selectedVoivodeship and VoivodeshipTerm
   deleteSelectedVoivodeship(): void {
    if (this.selectedVoivodeship !== undefined) {
      this.selectedVoivodeship = undefined;
      this.voivodeshipTerm = '';
      // removes also city, when changing voivodeship...
      this.deleteSelectedCity();
      this.cities = [];
    }
  }
  // -------------------------------------------CITY SELECTION-------------------------------------------
  //                COMPONENT METHODS
  // used to find stations in selected city by User;
  private findStationsInCity(stations: Station[], selectedCity: string): Station[] {
    return stations.filter(station => station.city.name === selectedCity);
  }
  //                VIEW METHODS
  // gets selected city by User
  getSelectedCity(city: string): void {
    this.selectedCity = city;
    this.stationsInCity = this.findStationsInCity(this.stationsInVoivodeship, city);
  }
  // removes previous selectedCity and cityTerm
  deleteSelectedCity(): void {
    if (this.selectedCity !== undefined) {
      this.selectedCity = undefined;
      this.cityTerm = '';
      this.stationsInCity = [];
    }
  }
  // --------------------------------------------WEB STORAGE API----------------------------------------
  // pass fetched all stations form gios api to Web Storage API
  private setItemToLocalStorage(key: string, data: object): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
  // gets all stations form Web Storage API
  private getStationsFromLocalStorage(key: string): Station[] {
    if (localStorage.getItem(key) !== null) {
      return JSON.parse(localStorage.getItem(key));
    }
  }
  // -----------------------------------------GO TO SELECTED STATION------------------------------------
  goToSelectedStation(station: Station): void {
    // Takes selected station and share within components with BehavioralSubject
    this.stationsData.setSelectedStation(station);
    this.router.navigate(['/station']);
  }
  // ----------------------------------------------OnInit-----------------------------------------------
  ngOnInit() {
    // hide elements in top-bar.component through top-bar.service
    this.topBar.hide();
    // gets all stations list form localStorage if its egsists in storage, else skip futher
    this.stations = this.getStationsFromLocalStorage('stations');
    this.stationsData.getStations()
      .subscribe(data => {
        this.stations = data;
        this.setItemToLocalStorage('stations', data);
      },
      error => {
        console.log(error);
        alert('Wystąpił problem z pobieraniem danych, sprawdź połączenie z internetem lub połączenie typu CORS w swojej przeglądarce.');
        // when problem with fetch data, redirect to connection-error page
        // this.router.navigate(['/connection-error']);
      });
  }
}

