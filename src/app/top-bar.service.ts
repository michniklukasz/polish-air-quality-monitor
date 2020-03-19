import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopBarService {
  private visible: boolean;
  constructor() {
    this.visible = false;
   }
   show(): void {
    this.visible = true;
   }
   hide(): void {
     this.visible = false;
   }
}
