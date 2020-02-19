import { Component, OnInit, Input } from '@angular/core';
import { StationsDataService } from '../stations-data.service';
import { Sensor } from '../I-sensor';
import { SensorData } from '../I-sensor-data';
import { IndexLevel } from '../I-index-level';

@Component({
  selector: 'app-sensor-data',
  templateUrl: './sensor-data.component.html',
  styleUrls: ['./sensor-data.component.css']
})
export class SensorDataComponent implements OnInit {
  @Input() sensor: Sensor;
  @Input() stationId: number;

  currentValue: number | string;
  // wykorzystac do kolorowania boxow itd 0-5 Bardzo dobry, Dobry, Umiarkowany, Dostateczny, Zły, Bardzo zły
  specificQualityIndex: IndexLevel;
  sensorData: SensorData;
  
  constructor(
    private stationsData: StationsDataService,
  ) { }
  check() {
    // console.log(this.sensorData)
    // console.log(this.currentValue)
    console.log(this.specificQualityIndex)
  }
  initialize() {
    if (this.sensorData.values.length > 0) {
      this.currentValue = this.stationsData.searchForLatesValueInSensorData(this.sensorData).toFixed(1);
    } else {
      this.currentValue = "bd."
    }
  }
  ngOnInit() {
    this.stationsData.getSensorData(this.sensor.id).subscribe(response => {
      this.sensorData = response;
      this.initialize();
    })
    this.stationsData.getStationAQI(this.stationId).subscribe(response => {
      this.specificQualityIndex = response[`${this.sensor.param.paramCode.toLowerCase().replace(/\./g, "")}IndexLevel`];
    })
  }
}
