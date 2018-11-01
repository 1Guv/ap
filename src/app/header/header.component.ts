import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public innerWidth: any;
  isMobileResolution: boolean;
  // isTabletResolution: boolean;

  constructor() {}

  ngOnInit() {
    this.getCurrentResolution();
    this.getIsMobileResolution();
  }

  public getCurrentResolution() {
    this.innerWidth = window.innerWidth;
    console.log('current res', this.innerWidth);

    if (this.innerWidth <= 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  public getIsMobileResolution(): boolean {
    return this.isMobileResolution;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const pixelResolution = event.target.innerWidth;
    console.log('Event', pixelResolution);

    if (pixelResolution <= 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }

    console.log(this.isMobileResolution);
  }

}
