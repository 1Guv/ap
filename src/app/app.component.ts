import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'APNAPLATES 2019';

  @ViewChild('sidenav') sidenav: any;

  ngOnInit() {
    console.log('sidenav', this.sidenav);
  }
}
