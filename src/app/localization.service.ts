import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  constructor() {
  }

  getLocalization(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(GeoPos => {
          resolve({lon: GeoPos.coords.longitude, lat: GeoPos.coords.latitude});
        },
        error => {
          reject(error);
        });
    });
  }

}
