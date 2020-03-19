import { Component, OnInit, Input } from '@angular/core';
import { StationsDataService } from '../stations-data.service';
import { Sensor } from '../I-sensor';
import { SensorData } from '../I-sensor-data';

@Component({
  selector: 'app-sensor-data',
  templateUrl: './sensor-data.component.html',
  styleUrls: ['./sensor-data.component.css']
})
export class SensorDataComponent implements OnInit {
  @Input() sensor: Sensor;
  @Input() stationId: number;
  x = 40;
  // is sensor active at selectedStationP?
  isActive: boolean;
  // all reading from sensor
  sensorData: SensorData;
  // most current reading value
  currentValue: number;
  // currentValue in relation to maxiumum value, expressed in %.
  currentPercentageValue: number;
  // value from currentPercentageValue but max 100%,
  // when val is higher function barWidthIfHazadrous changes to 100% and sets as hazadrous
  barWidth: number;
  // bar color selected by  barColors()
  barColor: string;
  // health norms of pollutions in air, expressed in ug/m3.
  pollutions = {
    'C6H6': 5,
    'NO2': 200,
    'SO2': 500,
    'CO': 10000,
    'PM10': 50,
    'PM2.5': 25,
    'O3': 110
  }
  constructor(
    private stationsData: StationsDataService,
  ) {
    this.isActive = false;
    this.currentValue = undefined;
  }
  // calculate perentage value..
  private calculatePercent(numeral: number, denominator: number) {
    const percents = numeral / denominator * 100;
    return Number(percents.toFixed(1));
  }
  // sets color according to currentPercentageValue
  private barColors(percents: number) {
    const x = percents;
    switch(true) {
      case (x <= 10):
        return 'rgb(0, 153, 102)';
      case(x > 10 && x <= 20):
        return 'rgb(255, 222, 51)';
      case(x > 20 && x <= 30):
        return 'rgb(255, 153, 51)';
      case(x > 30 && x <= 40):
        return 'rgb(204, 0, 51)';
      case(x > 40 && x <= 60):
        return 'rgb(102, 0, 153)';
      case(x > 60):
        return 'rgb(126, 0, 35)';
    }
  }
  // sets the value of .bar width
  // if currentPercentageValue > 100% moves back to 100%
  private barWidthIfHazadrous(percentageValue: number): number {
    return (percentageValue > 100) ? 100 : percentageValue;
  }
  ngOnInit() {
    return new Promise((resolve, reject) => {
      this.stationsData.getSensorData(this.sensor.id).subscribe(response => {
        this.sensorData = response;
        resolve(true);
      }, () => {
        reject('Próba pobrania danych stacji nie powiodła się.');
      });
    })
    .then(() => {
      if (this.sensorData.values.length > 0) {
        this.isActive = true;
        // sets currentValue only if values from sensor reading are available (see if statement 2 lines above)
        // else currentValue is undefined;
        this.currentValue = this.stationsData.searchForLatesValueInSensorData(this.sensorData);
        if (this.currentValue !== undefined) {
          this.currentPercentageValue = this.calculatePercent(this.currentValue, this.pollutions[this.sensorData.key]);
          this.barWidth = this.barWidthIfHazadrous(this.currentPercentageValue);
          this.barColor = this.barColors(this.currentPercentageValue);
        }
      }
    })
    .catch((error) => {
      console.log(error);
      throw new Error();
    });
  }
}