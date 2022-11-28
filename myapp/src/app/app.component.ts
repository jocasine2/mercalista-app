import { Component } from '@angular/core';
import { LoginService } from './api/users/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  data = undefined;

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Lista da dispensa', url: '/lista-dispensa', icon: 'archive' },
    { title: 'Produtos', url: '/produtos', icon: 'cube' },
    { title: 'Estabelecimentos', url: '/estabelecimentos', icon: 'heart' },
    { title: 'Itens', url: '/items', icon: 'box' }
  ];

  constructor(private LoginService: LoginService) {
  }

  async ngOnInit() {
    this.data = await this.LoginService.validatetUser();
  }

  alerta(){
    console.log(this.LoginService.logout());
  }
}
