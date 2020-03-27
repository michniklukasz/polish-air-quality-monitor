import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  visibleSpinner: boolean;
  visibleContent: boolean;
  constructor() {
    this.visibleSpinner = false;
    this.visibleContent = false;
  }
  public showSpinner(): void {
    this.visibleContent = false;
    this.visibleSpinner = true;
  }
  public hideSpinner(): void {
    setTimeout((): void => {
      this.visibleSpinner = false;
      this.visibleContent = true;
    }, 2000);
  }
}
