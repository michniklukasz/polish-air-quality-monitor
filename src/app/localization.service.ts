import { Injectable } from '@angular/core';
import { Station } from './I-selected-station';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  // selectedStation$: Station;
  constructor() {}
  getUserLocalization(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(GeoPos => {
          resolve({gegrLat: GeoPos.coords.latitude, gegrLon: GeoPos.coords.longitude});
        },
        error => {
          // Here u infor user about users localization rejection
          window.alert('Nie można wykonać operacji, ponieważ nie zezwolono na dostęp do lokalizacji urządzenia.');
          reject(error);
        });
    });
  }
  calculateDistance(userLoc, stations: Station[]) {
      return stations.map( station => {
        const calcDelta = Math.sqrt(Math.pow(Math.abs(parseFloat(station.gegrLat) as number - userLoc.gegrLat as number), 2)
                            + Math.pow(Math.abs(parseFloat(station.gegrLon) as number - userLoc.gegrLon as number), 2));
        return {id: station.id, delta: calcDelta};
      });
  }
  sortStationsByDistance(unsortedStationss) {
      return unsortedStationss.sort((a, b) => a.delta as number - b.delta as number);
  }
  createArrayOfFiveClosestStations(allStations: Station[], sortedByDistance) {
    const fiveStationIds = sortedByDistance.slice(0, 4).map(element => element.id);
    return fiveStationIds.map((id) => {
       return allStations.filter(station => station.id === id);
    }).flat();
  }
}
