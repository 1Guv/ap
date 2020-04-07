import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-listings-page-one',
  templateUrl: './listings-page-one.component.html',
  styleUrls: ['./listings-page-one.component.css']
})
export class ListingsPageOneComponent implements OnInit {

  allPlates: any;
  allData: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    // console.log('1');
    // this.api.getPlatesViaAPI().subscribe((data) => {
    //   console.log('3');
    //   console.log('data', data);
    //   this.allPlates = data;
    // }), (error: any) => {
    //   console.log('error', error);
    // };
    // console.log('4');
    this.getData();
  }

  getData() {
    // this.api.getFirebaseData().subscribe((res) => {
    //     this.allData = res;
    //     console.log('allData', this.allData);
    //   });
  }

}
