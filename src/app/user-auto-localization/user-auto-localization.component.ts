import { Component, OnInit, Input } from '@angular/core';
import { Station } from '../I-selected-station';
import { StationsDataService } from '../stations-data.service';
import { LocalizationService } from '../localization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auto-localization',
  template: `
    <div class="auto-localization">
      <button (click)="onAutoSubmit()">
        <i class="material-icons">my_location</i>
        <span>UŻYJ OBECNEJ LOKALIZACJI</span>
      </button>
    </div>
  `,
  styleUrls: ['./user-auto-localization.component.css']
})
export class UserAutoLocalizationComponent implements OnInit {
   // Closest stations to User, found by Users localization
  closestStations: Station[];
  @Input() stations: Station[];

  constructor(
    private stationsData: StationsDataService,
    private autoLocalization: LocalizationService,
    private router: Router,
  ) { }
  async onAutoSubmit() {
    this.closestStations = await this.autoLocalization.auto(this.stations);
    this.stationsData.setSelectedStation(this.closestStations[0]);
    this.router.navigate(['/station']);
  }
  ngOnInit() {}
}
