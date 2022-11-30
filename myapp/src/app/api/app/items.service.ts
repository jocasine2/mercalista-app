import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  baseUrl = 'https://whispering-headland-83074.herokuapp.com'; //teste
  
  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

   // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os estabelecimentos
  getItems(): Observable<Item[]> {
    var url = this.baseUrl+'/products'
    return this.httpClient.get<Item[]>(url).pipe(retry(2), catchError(this.handleError))
  }

  // Realizar login
  createItem(registerRequest: RegisterRequest): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    if (registerRequest.password == registerRequest.password_confirmation){
      const body = {"email": registerRequest.email, "password": registerRequest.password, "confirm_success_url":"google.com"};
      return this.httpClient.post<any>(this.baseUrl+'/auth', body, {observe: 'response'});
    }

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
