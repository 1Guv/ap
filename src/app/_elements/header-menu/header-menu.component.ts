import { Component, OnInit, Input } from '@angular/core';
import { MenuOptions } from '../../_models/menu-options';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  // Getting sidenav element from parent so we can use sidenav.toggle()
  @Input() sidenav: any;

  arrayOfMenuOptions: MenuOptions[] = [
    {
      optionName: 'List Your Plate',
      optionLink: '',
    },
    {
      optionName: 'How It Works',
      optionLink: '',
    },
    {
      optionName: 'Get a Valuation',
      optionLink: '',
    },
    {
      optionName: 'Price',
      optionLink: '',
    },
    {
      optionName: 'About',
      optionLink: '',
    },
    {
      optionName: 'Contact',
      optionLink: '',
    },
    {
      optionName: 'Login',
      optionLink: '',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
