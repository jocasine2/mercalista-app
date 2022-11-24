import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/api/users/login.service';
import { User } from 'src/app/models/user';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: User;
  public loginRequest: Login;

  constructor(private loginService: LoginService) { 
  }

  ngOnInit() {
    this.loginRequest = new Login();
  }

  // Chama o serviço para obter todos os itens
  getUser() {
    //console.log(this.loginRequest)
    this.loginService.getUser(this.loginRequest).subscribe(resp => {
      // Here, resp is of type HttpResponse<MyJsonData>.
      // You can inspect its headers:
      console.log(resp.headers);
      // And access the body directly, which is typed as MyJsonData as requested.
      console.log(resp.body.someField);
    });
  }

}
