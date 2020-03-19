import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopBarService } from '../top-bar.service';
import { StationsDataService } from '../stations-data.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(
    private router: Router,
    private topBar: TopBarService,) {}
  ngOnInit() {
  }
  backToMain() {
    this.router.navigate(['']);
  }
}
