import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';

export interface AuthResponse {
  success: boolean;
  code: string;
  message: string;
  accessToken?: string;
  error?: any;
  data?: any;
}
export interface IUser {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  status: number,
  createdUserId?: number,
  createdAt?: Date,
  updatedUserId?: number,
  updatedAt?: Date,
  companies?: any[],
  roles?: any[],
  image?: string,
  title?: string,
  phoneNumber?: string,
  position?: string,
  url?: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Definimos la URL de la API
  redirectUrl: string = '/';
  test_api: string = "http://localhost:8000/"
  api: string = 'https://api.kolaboraty.com/';
  errorData: {} | undefined;
  private currentUserSource = new BehaviorSubject<IUser>(this.getCurrentUser());
  currentUser = this.currentUserSource.asObservable();
  constructor(private http: HttpClient) { }

  public getLastUser(): string {
    const rememberItem = localStorage.getItem('currentUser-remember');
// Si rememberITem es igual a true, devuelve el email del usuario, de lo contrario, devuelve un string vacío
    if (rememberItem) {
      const remember = JSON.parse(rememberItem);
      return remember.email ? remember.email : '';
    } else {
      return '';
    }
  }

  public getCurrentUser(): IUser | any {
    const currentUserItem = localStorage.getItem('currentUser');

    if (currentUserItem) {
      const currentUser = JSON.parse(currentUserItem);
      return currentUser.data;
    } else {
      return null;
    }
  }
  // Método para registrar un usuario
  registerUser(data: any) {
    return this.http.post(this.test_api + "register/", data)
      .pipe(
        map(res => {
          if (res["status"] === "ok") {
            // Extraemos el token y lo guardamos en el localStorage
            console.log(res)
          }
          return res;
        }
        ),
        catchError(this.handleError)
      );
  }

  loginUser(data: any) {
    console.log(data)
    return this.http.post(this.test_api + "login/", data)
      .pipe(
        map(res => {
          if (res["status"] === "ok") {
            // Extraemos el token y lo guardamos en el localStorage
            console.log(res)
          }
          return res;
        }
        ),
        catchError(this.handleError)
      );
  }

  getUserInfo(token: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'HTTP_AUTHORIZATION',
      Authorization: `Bearer ${token}`
    });
    return this.http.post(this.test_api + "user_info/", {headers} )
      .pipe(
        map(res => {
          if (res["status"] === "ok") {
            console.log(res)
          } 
          return res;
        }
        ),
        catchError(this.handleError)
      );
  }

loggedIn() {
    return !!localStorage.getItem('token');
  }

  // Método para cerrar sesión
  logout() {
    localStorage.removeItem('token');
  }
  public setToken(res: AuthResponse, username: string, remember: boolean) {
    localStorage.setItem('currentUser', JSON.stringify(res));
    // Si checkbox es seleccionado, el navegador guardará el email del usuario
    if (remember) {
      localStorage.setItem('currentUser-remember', JSON.stringify({ remember: remember, email: username }));
    }
    // Si checkbox no es seleccionado, el navegador no guardará el email del usuario
    else {
      localStorage.setItem('currentUser-remember', JSON.stringify({ remember: remember, email: null }));
    }
    // Definimos la variable currentUser que será igual al token recibido
    var currentUser = res.data;
    console.log(currentUser)
    // Definimos la variable currentUserSource que será igual al token recibido
    this.currentUserSource.next(currentUser);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${JSON.stringify(error.error)}`);
    }
    var message = "";
    if (error.error.message)
      message = error.error.message;
    else if (error.message)
      message = error.message;
    /*
    if (error.error.cause.details)
      errormessage = error.error.cause.details;
    else if (error.message)
      errormessage = error.message;
    */
    this.errorData = {
      message: message,
      error: error
    };
    return throwError(this.errorData);
  }

}

