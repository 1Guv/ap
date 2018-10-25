import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMobileResolution: boolean;
  // isTabletResolution: boolean;

  constructor() {}

  ngOnInit() {
    this.getIsMobileResolution();
  }

  public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    event.target.innerWidth;
    console.log('Event', event.target.innerWidth);

    if (event.target.innerWidth <= 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }

    console.log(this.isMobileResolution);
  }

}
