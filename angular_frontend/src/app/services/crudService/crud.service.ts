import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// importamos el servicio de token
import { AuthResponse } from '../authSevice/auth.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  API_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  sandMessage(data: any) {
    console.log(data)
    return this.http.post(this.API_URL + `contact/`, data)
      .pipe(
        map(res => {
          return res;
        }
        ),
        catchError(this.handleError)
      );
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return errorMessage;
  }
}
