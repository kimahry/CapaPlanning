import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor() { }

  ngOnInit(): void {

  }

  closeSideNav() {
    this.sidenav.close();
  }

}
