import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Lista da dispensa', url: '/lista-dispensa', icon: 'archive' },
    { title: 'Produtos', url: '/produtos', icon: 'cube' },
    { title: 'Estabelecimentos', url: '/estabelecimentos', icon: 'heart' }
  ];

  constructor() {}
}
