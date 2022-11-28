import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/api/users/login.service';
import { User } from 'src/app/models/user';
import { Login } from 'src/app/models/login';
import { Router } from "@angular/router";
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: User = new User();
  public loginRequest: Login;

  constructor(private loginService: LoginService, private router: Router,  public menuCtrl: MenuController) {
  }

  ngOnInit() {

    // this.menuCtrl.enable(false);
    this.loginRequest = new Login();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  // Chama o serviço para obter todos os itens
  getUser() {
    this.loginService.getUser(this.loginRequest).subscribe(resp => {
      this.user.uid = resp.headers.get('uid');
      this.user.access_token = resp.headers.get('access-token');
      this.user.client = resp.headers.get('client');

      //o ideal aqui seria criar ou atualizar validate_user
      localStorage.removeItem('validate_user');
      localStorage.setItem('validate_user', JSON.stringify(this.user));

      if(JSON.parse(localStorage.getItem('validate_user'))){
        this.router.navigate(['/home']);
      }
    }, err => {
      console.log(err);
      alert('falha ao realizar login...');
    });
  }

}
