import {Component, HostListener, OnInit, ViewChildren, Output, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Getting sidenav element from parent so we can use sidenav.toggle()
  @Input() sidenav: any;

  public innerWidth: any;
  isMobileResolution: boolean;
  // isTabletResolution: boolean;

  constructor() {}

  ngOnInit() {
    this.getCurrentResolution();
  }

  // Gets the current screen size and sets the menu to mobile or normal on first load
  public getCurrentResolution() {
    this.innerWidth = window.innerWidth;
    this.innerWidth <= 810 ? this.isMobileResolution = true : this.isMobileResolution = false;
  }

  // Listens to the window resize event to change menu to reponsive if the screen is resized
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const pixelResolution = event.target.innerWidth;
    pixelResolution <= 810 ? this.isMobileResolution = true : this.isMobileResolution = false;
  }
}
