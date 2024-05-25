// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { catchError,map } from 'rxjs/operators';
// import { __param } from 'tslib';

// const BASIC_URL = "http://localhost:8080/";
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private isAuthenticated = false;

//   constructor(private http: HttpClient) { }

//   getAuthStatus(): boolean {
//     return this.isAuthenticated;
//   }

//   signup(SignupRequest: any): Observable<any> {
//     return this.http.post(BASIC_URL + "api/auth/signup", SignupRequest).pipe(
//       catchError(error => {
//         return throwError(() => new Error('Signup error'));
//       })
//     );
//   }

//   login(loginRequest: any): Observable<any> {
//     return this.http.post<{ token: string }>(BASIC_URL + "api/auth/login", loginRequest).pipe(
//       map(response => {
//         if (response.token) {
//           this.isAuthenticated = true;
//           localStorage.setItem('authToken', response.token);
//         }
//         return response;
//       }),
//       catchError(error => {
//         this.isAuthenticated = false;
//         return throwError(() => new Error('Login error'));
//       })
//     );
//   }

//   logout(): void {
//     this.isAuthenticated = false;
//     localStorage.removeItem('authToken');
//   }
// }
   
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { __param } from 'tslib';

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private http: HttpClient) { }

  getAuthStatus(): boolean {
    return !!localStorage.getItem('token');
  }

  signup(SignupRequest: any): Observable<any> {
    return this.http.post(BASIC_URL + "api/auth/signup", SignupRequest).pipe(
      catchError(error => {
        return throwError(() => new Error('Signup error'));
      })
    );
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post<{ token: string }>(BASIC_URL + "api/auth/login", loginRequest).pipe(
      map(response => {
        if (response.token) {
          this.isAuthenticated = true;
          localStorage.setItem('token', response.token);
        }
        return response;
      }),
      catchError(error => {
        this.isAuthenticated = false;
        return throwError(() => new Error('Login error'));
      })
    );
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
  }
}
