import { Component, OnInit } from '@angular/core';
import { LocalizationService } from '../localization.service';
import { StationsDataService } from '../stations-data.service';

@Component({
  selector: 'app-station-selection',
  templateUrl: './station-selection.component.html',
  styleUrls: ['./station-selection.component.css']
})
export class StationSelectionComponent implements OnInit {
  localisation = {};
  stations;
  constructor(
    private localization: LocalizationService,
    private stationsData: StationsDataService
  ) { }
  getLocalization() {
    this.localization.getLocalization().then(GeoLoc => {
      this.localisation = GeoLoc;
    });
  }
  ngOnInit() {
    this.stations = this.stationsData.getStations().subscribe(res => {
      this.stations = res;
    });
  }
}
