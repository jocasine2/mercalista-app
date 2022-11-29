import { Component, OnInit } from '@angular/core';
import { RegisterRequest } from 'src/app/models/register-request';
import { LoginService } from 'src/app/api/users/login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit {

  public registerRequest: RegisterRequest
  
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.registerRequest = new RegisterRequest();
  }

  // Chama o serviço para registrar o novo usuário
  registerUser() {
    this.loginService.registerUser(this.registerRequest).subscribe(resp => {
      console.log(resp)
    }, err => {
      console.log(err);
      alert('falha ao registrar usuário...');
    });
  }
  
  goToLogin(){
    this.router.navigate(['/login']);
  }

}
