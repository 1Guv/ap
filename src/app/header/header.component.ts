import {Component, HostListener, OnInit, ViewChildren, Output} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @ViewChildren('sidenav') sidenav: MatSidenav;
  public innerWidth: any;
  isMobileResolution: boolean;
  // isTabletResolution: boolean;

  constructor() {}

  ngOnInit() {
    this.getCurrentResolution();
    // console.log('sidenav', this.sidenav);
  }

  // Gets the current screen size and sets the menu to mobile or normal on first load
  public getCurrentResolution() {
    this.innerWidth = window.innerWidth;
    this.innerWidth <= 768 ? this.isMobileResolution = true : this.isMobileResolution = false;
  }

  // Listens to the window resize event to change menu to reponsive if the screen is resized
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const pixelResolution = event.target.innerWidth;
    pixelResolution <= 768 ? this.isMobileResolution = true : this.isMobileResolution = false;
  }

  // public toggleSidenav() {
  //   console.log('yo');
  //   console.log(this.sidenav);
  //   this.sidenav.toggle();
  // }
}
