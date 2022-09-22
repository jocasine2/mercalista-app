import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  public appMenuPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Lista da dispensa', url: '/folder/Inbox', icon: 'archive' },
    { title: 'Produtos', url: '/folder/Outbox', icon: 'cube' },
    { title: 'Estabelecimentos', url: '/folder/Favorites', icon: 'heart' }
  ];

  constructor() {
    console.log(this.appMenuPages)
   }

  ngOnInit() {}

}
