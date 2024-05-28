// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';
// import { __param } from 'tslib';

// const BASIC_URL = 'http://localhost:8080/';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private isAuthenticated = false;

//   constructor(private http: HttpClient) {}

//   getAuthStatus(): boolean {
//     return !!localStorage.getItem('token');
//   }

//   signup(SignupRequest: any): Observable<any> {
//     return this.http
//       .post<{ token: string; userrname: string }>(
//         BASIC_URL + 'api/auth/signup',
//         SignupRequest
//       )
//       .pipe(
//         catchError((error) => {
//           return throwError(() => new Error('Signup error'));
//         })
//       );
//   }

//   login(loginRequest: any): Observable<any> {
//     return this.http
//       .post<{
//         name: string;
//         token: string;
//       }>(BASIC_URL + 'api/auth/login', loginRequest)
//       .pipe(
//         map((response) => {
//           if (response.token) {
//             this.isAuthenticated = true;
//             localStorage.setItem('token', response.token);
//             localStorage.setItem('name', response.name);
//           }
//           return response;
//         }),
//         catchError((error) => {
//           this.isAuthenticated = false;
//           return throwError(() => new Error('Login error'));
//         })
//       );
//   }

//   logout(): void {
//     this.isAuthenticated = false;
//     localStorage.removeItem('token');
//     localStorage.removeItem('username');
//   }
// }


// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';

// const BASIC_URL = "http://localhost:8080/";

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private isAuthenticated = false;

//   constructor(private http: HttpClient) { }

//   getAuthStatus(): boolean {
//     return !!localStorage.getItem('token');
//   }

//   signup(SignupRequest: any): Observable<any> {
//     return this.http.post<{ token: string, name: string }>(BASIC_URL + "api/auth/signup", SignupRequest).pipe(
//       catchError(error => {
//         return throwError(() => new Error('Signup error'));
//       })
//     );
//   }

//   login(loginRequest: any): Observable<any> {
//     return this.http.post<{ name: string; token: string }>(BASIC_URL + "api/auth/login", loginRequest).pipe(
//       map(response => {
//         if (response.token) {
//           this.isAuthenticated = true;
//           localStorage.setItem('token', response.token);
//           localStorage.setItem('username', response.name);
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
//     localStorage.removeItem('token');
//     localStorage.removeItem('username');
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { StorageService } from '../storage/storage.service';
import { Token } from '@angular/compiler';

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
    return this.http.post<{ token: string, name: string, employee_id:any }>(BASIC_URL + "api/auth/signup", SignupRequest).pipe(
      catchError(error => {
        return throwError(() => new Error('Signup error'));
      })
    );
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post<{ name: string; token: string; employee_id:any }>(BASIC_URL + "api/auth/login", loginRequest).pipe(
      map(response => {
        if (response.token) {
          this.isAuthenticated = true;
          
          StorageService.saveToken(response.token);
          StorageService.saveUsername(response.name);
          StorageService.saveUserId(response.employee_id);
          console.log('Login response:', response);
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
    
    StorageService.clearToken();
    StorageService.clearUsername();
    StorageService.clearUserId();
  
  }
}
