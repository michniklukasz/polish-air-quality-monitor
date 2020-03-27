import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// services
import { StationsDataService } from '../stations-data.service';
import { SpinnerService } from '../spinner.service';
// interfaces
import { Station } from '../I-selected-station';
import { Sensor } from '../I-sensor';
import { IndexLevel } from '../I-index-level';


@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.css']
})
export class StationDetailsComponent implements OnInit {
  // current station
  selectedStation$: Station;
  // all sensors within selected station
  selectedStationSensors: Sensor[];
  // overall quality index
  overallQualityIndex: IndexLevel;
  // face icom
  faceIcon: string;
  // face icon color
  overallQualityIndexColor: string;
  constructor(
    public spinner: SpinnerService,
    private stationsData: StationsDataService,
    private router: Router,
  ) {
    // show spinner when loading component and stations data
    this.spinner.showSpinner();
    // initially as undefined, before promise in ngOnInit starts
    this.selectedStation$ = undefined;
  }
  // set color at overallQualityIndex
  private indexColors(QualityIndex: string): string {
    const x = QualityIndex;
    switch (true) {
      case(x === 'Bardzo dobry'):
        return 'rgb(0, 153, 102)';
      case(x === 'Dobry'):
        return 'rgb(255, 222, 51)';
      case(x === 'Umiarkowany'):
        return 'rgb(255, 153, 51)';
      case(x === 'Dostateczny'):
        return 'rgb(204, 0, 51)';
      case(x === 'Zły'):
        return 'rgb(102, 0, 153)';
      case(x === 'Bardzo zły'):
        return 'rgb(126, 0, 35)';
      case (x === 'Brak indeksu'):
        return 'rgb(68, 86, 111)';
      default:
        return 'rgb(68, 86, 111)';
    }
  }
  // index face
  indexFaceIcon(QualityIndex: string): string {
    const x = QualityIndex;
    if (x === 'Bardzo dobry') {
      return 'tag_faces';
    } else {
      return 'face';
    }
  }
  public backToMain() {
    this.router.navigate(['']);
  }
  ngOnInit() {
    // make api call and data manipulation
    return new Promise((resolve, reject) => {
      this.stationsData.selectedStation$.subscribe(selectedStation => {
          this.selectedStation$ = selectedStation;
          resolve(true);
        }, () => {
          reject('nie znaleziono stacji');
        });
      })
      .then(() => {
        this.stationsData.getStationData(this.selectedStation$.id).subscribe(response => {
          this.selectedStationSensors = response;
        });
        this.stationsData.getStationAQI(this.selectedStation$.id).subscribe(response => {
          this.overallQualityIndex = response;
          this.faceIcon = this.indexFaceIcon(this.overallQualityIndex.indexLevelName);
          this.overallQualityIndexColor = this.indexColors(this.overallQualityIndex.indexLevelName);
        });
      })
      .then(() => {
        // shows component content and hides spinner
        this.spinner.hideSpinner();
      })
      .catch(error => {
        console.log(error);
        console.log(this.overallQualityIndex);
        // moves back user to main page when promise fails
        this.router.navigate(['']);
      });
  }
}
