import { Component, OnInit, OnDestroy } from '@angular/core';
import { StationsDataService } from '../stations-data.service';
import { Station } from '../I-selected-station';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { voivodeships } from '../hand-held-data';


@Component({
  selector: 'app-station-selection',
  templateUrl: './station-selection.component.html',
  styleUrls: ['./station-selection.component.css']
})
export class StationSelectionComponent implements OnInit, OnDestroy {
  //                                                          ALL STATIONS FORM GIOS API
  stationsData$: Subscription;
  stations: Station[];
  stationsInVoivodeship: Station[];
  stationsInCity: Station[];
  //                                                        VOIVODESHIP SELECTION VARIABLES
  voivodeships: string[] = voivodeships;
  voivodeshipTerm: string = '';
  selectedVoivodeship: string;
  //                                                            CITY SELECTION VARIABLES

  cities: string[];
  // cities: string[] | undefined;
  cityTerm: string = '';
  selectedCity: string;
  //                                              STATION SELECTED BY USER OR AUTO-LOCALIZATION-SERVICE
  selectedStation$: Station;
  constructor(
    private stationsData: StationsDataService,
    private router: Router,
  ) { }
  //                                                      VOIVODESHIP SELECTION METHODS
  // gets selected voivodeship by User
  getSelectedVoivodeship(voivodeship: string): void {
    this.selectedVoivodeship = voivodeship;
    this.stationsInVoivodeship = this.stationsData.filterBySelectedVoivodeship(this.stations, voivodeship);
    this.cities = this.stationsData.filterCitiesInVoivodeship(this.stationsInVoivodeship);
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
  //                                                        CITY SELECTION METHODS
  // gets selected city by User
  getSelectedCity(city: string): void {
    this.selectedCity = city;
    this.stationsInCity = this.stationsData.filterStationsInCity(this.stationsInVoivodeship, city);
  }
  // removes previous selectedCity and cityTerm
  deleteSelectedCity(): void {
    if (this.selectedCity !== undefined) {
      this.selectedCity = undefined;
      this.cityTerm = '';
    }
  }
  check() {
    console.log(this.selectedCity);
  }
  //                                                          ???????????????
  onUserSubmit() {
    // Takes selected station through NgModule 2way binding and sets to BehavioralSubject
    this.stationsData.setSelectedStation(this.selectedStation$);
    this.router.navigate(['/station']);
  }
  ngOnInit() {
    if (localStorage.getItem('stations') === null && localStorage.getItem('cities') === null) {
      this.stationsData$ = this.stationsData.getStations()
      .subscribe(data => {
        this.stations = data;
        localStorage.setItem('stations', JSON.stringify(data));
        // this.cities = this.stationsData.getAllCities(data);
        // localStorage.setItem('cities', JSON.stringify(this.cities));
      },
      error => {
        console.log(error);
        alert('Wystąpił problem z pobieraniem danych, sprawdź połączenie z internetem lub połączenie typu CORS w swojej przeglądarce.');
        // when problem with fetch data, redirect to connection-error page
        // this.router.navigate(['/connection-error']);
      });
    } else {
      this.stations = JSON.parse(localStorage.getItem('stations'));
      // this.cities = JSON.parse(localStorage.getItem('cities'));
    }
  }
  ngOnDestroy() {
    this.stationsData$.unsubscribe();
  }
}
