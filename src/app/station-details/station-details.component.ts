import { Component, OnInit } from '@angular/core';
import { StationsDataService } from '../stations-data.service'
import { Station } from '../I-selected-station';
import { Router } from '@angular/router';
import { IndexLevel } from '../I-index-level';

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.css']
})
export class StationDetailsComponent implements OnInit {
  selectedStation$: Station;
  overallQualityIndex: IndexLevel;
  selectedStationSensors;
  
  constructor(
    private stationsData: StationsDataService,
    private router: Router,
  ) { }
  check() {
    console.log(this.selectedStationSensors)
    console.log(this.overallQualityIndex)
  }
  initialize() {
    this.stationsData.getStationData(this.selectedStation$.id).subscribe(response => {
      this.selectedStationSensors = response;
    }) 
    this.stationsData.getStationAQI(this.selectedStation$.id).subscribe(response => {
      this.overallQualityIndex = response['stIndexLevel'];
    })
  }
  ngOnInit() {
    this.stationsData.selectedStation$.subscribe(selectedStation => {
    this.selectedStation$ = selectedStation
      if (this.selectedStation$ === null ) {
        this.router.navigate(['']);
      } else { 
        this.initialize();
      }
    });
    }
}
