import { Component, OnInit, Input } from '@angular/core';
import { Station } from '../I-selected-station';
import { StationsDataService } from '../stations-data.service';
import { LocalizationService } from '../localization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auto-localization',
  templateUrl: './user-auto-localization.component.html',
  styleUrls: ['./user-auto-localization.component.css']
})
export class UserAutoLocalizationComponent implements OnInit {
   // Closest stations to User, found by Users localization
  closestStations: Station[] = [];
  @Input() stations: Station[];

  constructor(
    private stationsData: StationsDataService,
    private autoLocalization: LocalizationService,
    private router: Router,
  ) { }
  async auto() {
    let userLocalization;
    let unsortedStationss;
    let sortedByDistance;
    userLocalization = await this.autoLocalization.getUserLocalization();
    unsortedStationss = this.autoLocalization.calculateDistance(userLocalization, this.stations);
    sortedByDistance = this.autoLocalization.sortStationsByDistance(unsortedStationss);
    this.closestStations = this.autoLocalization.createArrayOfFiveClosestStations(this.stations, sortedByDistance);
  }
  async onAutoSubmit() {
    await this.auto();
    this.stationsData.setSelectedStation(this.closestStations[0]);
    this.router.navigate(['/station']);
  }
  ngOnInit() {}
}
