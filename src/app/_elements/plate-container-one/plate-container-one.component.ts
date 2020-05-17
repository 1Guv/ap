import { Component, OnInit } from '@angular/core';
import { PlatesClass } from '../../_models/plates';
import jsonPlates from '../../_json/plates/plates.json';

@Component({
  selector: 'app-plate-container-one',
  templateUrl: './plate-container-one.component.html',
  styleUrls: ['./plate-container-one.component.css']
})
export class PlateContainerOneComponent implements OnInit {

  arrayOfPlates: PlatesClass[] = jsonPlates.plates;

  constructor() { }

  ngOnInit() {
    console.log('plates', this.arrayOfPlates);
  }

}
