import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="container">
      <div class="loader">
        <div class="dots-wrapper">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <b class="message">Pobieranie danych...</b>
      </div>
    </div>
  `,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  constructor() {}
}

