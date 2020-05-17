import { Component, OnInit, Input } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Getting sidenav element from parent so we can use sidenav.toggle()
  @Input() sidenav: any;

  // Initial banner message
  headerBannerMessage = 'Advertise your Private Number Plate here...';

  subscription: Subscription;
  counter = 0;

  constructor() { }

  ngOnInit() {

    const source = interval(5000);
    const text = [
      '#1 for Listing Plates for FREE in the UK',
      'We are the Autotrader for Private Number Plates in the UK',
      'Advertise your Private Number Plate here...',
      'FREE Standard Listings - UPGRADE at any time',
      'We charge a ONE-OFF-FEE for a Premuim Listing',
      'We never ever take a commission - so you can keep all the profits',
      'We advertise your number plate until SOLD'
    ];
    this.subscription = source.subscribe(val => this.displayBannerHeaderText(text, this.counter));
  }

  displayBannerHeaderText(text: string[], counter: number) {
    if (this.counter < text.length) {
      // console.log('text', text[this.counter]);
      this.counter++;
      this.headerBannerMessage = text[counter];
    } else {
      this.counter = 0;
    }
  }
}
