import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { Login } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public user: User

  url = 'https://whispering-headland-83074.herokuapp.com/auth/sign_in'; //produção

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

   // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os estabelecimentos
  getUser(loginRequest: Login): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    const body = {"email": "jcsnetcc@gmail.com", "password": "123456789", "confirm_success_url":"google.com"};
    //console.log(loginRequest);
    return this.httpClient.post(this.url, body, options)
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
