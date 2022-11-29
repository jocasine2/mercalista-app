import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { Login } from 'src/app/models/login';
import { RegisterRequest } from './../../models/register-request';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'https://whispering-headland-83074.herokuapp.com'; //produção

  // injetando o HttpClient
  constructor(private httpClient: HttpClient, private router: Router) { }

   // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Realizar login
  registerUser(registerRequest: RegisterRequest): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    if (registerRequest.password == registerRequest.password_confirmation){
      const body = {"email": registerRequest.email, "password": registerRequest.password, "confirm_success_url":"google.com"};
      return this.httpClient.post<any>(this.baseUrl+'/auth', body, {observe: 'response'});
    }

  }

  // Realizar login
  getUser(loginRequest: Login): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    const body = {"email": loginRequest.user, "password": loginRequest.password, "confirm_success_url":"google.com"};
    return this.httpClient.post<any>(this.baseUrl+'/auth/sign_in', body, {observe: 'response'});
  }

  async validatetUser(){

    const user = JSON.parse(localStorage.getItem('validate_user'));

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

    if(user){
      headers.set('uid', user.uid)
      .set('access_token', user.access_token)
      .set('client', user.client)
    }
     //debug
    // console.log(localStorage.getItem('validate_user'));

    this.httpClient.get<any>(this.baseUrl+'/auth/validate_token', { 'headers': headers }).subscribe(resp => {
      console.log('Usuário validado com sucesso!',resp);
    }, err => {
      console.log('falha ao realizar logout...', err);
      this.router.navigate(['/login']);
    });
  }

  logout(){

    const user = JSON.parse(localStorage.getItem('validate_user'));

    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('uid', user.uid)
    .set('access_token', user.access_token)
    .set('client', user.client);

    this.httpClient.delete<any>(this.baseUrl+'/auth/sign_out', { 'headers': headers }).subscribe(resp => {
      console.log('logout efetuado com sucesso', resp.HttpErrorResponse);
      this.router.navigate(['/login']);
    }, err => {
      //debug
      alert('falha ao realizar logout...'+err);
    });


  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
