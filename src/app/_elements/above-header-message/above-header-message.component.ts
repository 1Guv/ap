import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-above-header-message',
  templateUrl: './above-header-message.component.html',
  styleUrls: ['./above-header-message.component.scss']
})
export class AboveHeaderMessageComponent implements OnInit {

  headerMessage = '#1 for Advertising Private Number Plates in the UK for FREE!';
  constructor() { }

  ngOnInit() {
  }

}
