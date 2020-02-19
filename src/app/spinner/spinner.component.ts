import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
//https://dev.to/johncarroll/angular-how-to-easily-display-loading-indicators-4359
//https://gitlab.com/service-work/is-loading/-/blob/master/lib/src/lib/is-loading.service.ts
//info
//https://www.concretepage.com/angular/angular-debouncetime