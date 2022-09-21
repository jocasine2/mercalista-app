import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Lista da dispensa', url: '/folder/Inbox', icon: 'archive' },
    { title: 'Produtos', url: '/folder/Outbox', icon: 'cube' },
    { title: 'Estabelecimentos', url: '/folder/Favorites', icon: 'heart' }
  ];

  constructor() {}
}
