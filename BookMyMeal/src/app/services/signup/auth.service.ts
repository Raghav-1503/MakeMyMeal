
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { StorageService } from '../storage/storage.service';
import { ChangePasswordRequest } from 'src/app/app/change-password-request.model';

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private http: HttpClient, private storageService: StorageService) { }

  getAuthStatus(): boolean {
    return !!StorageService.getToken();
  }

  signup(signupRequest: any): Observable<any> {
    return this.http.post<{ token: string, name: string, employee_id: any }>(BASIC_URL + "api/auth/signup", signupRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Signup error', error);
        return throwError(() => new Error('Signup error: ' + error.message));
      })
    );
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post<{ name: string; token: string; employee_id: any }>(BASIC_URL + "api/auth/login", loginRequest).pipe(
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
      catchError((error: HttpErrorResponse) => {
        this.isAuthenticated = false;
        console.error('Login error', error);
        return throwError(() => new Error('Login error: ' + error.message));
      })
    );
  }

  sendVerificationEmail(email: string): Observable<any> {
    return this.http.post(`${BASIC_URL}forgot-password/verifyMail/${email}`, {}).pipe(
      map(response => {
        if (!response) {
          throw new Error('Empty response from server');
        }
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Send verification email error', error);
        return throwError(() => new Error('Send verification email error: ' + error.message));
      })
    );
  }

  verifyOtp(data: { email: string, otp: string }): Observable<any> {
    return this.http.post(`${BASIC_URL}forgot-password/verifyOtp`, data).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Verify OTP error', error);
        return throwError(() => new Error('Verify OTP error: ' + error.message));
      })
    );
  }

  // changePassword(changePasswordRequest: ChangePasswordRequest): Observable<any> {
  //   const email = StorageService.getEmail();
  //   const url = `${BASIC_URL}api/auth/change-password/${email}`;
  //   return this.http.post(url, changePasswordRequest).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       console.error('Change password error', error);
  //       return throwError(() => new Error('Change password error: ' + error.message));
  //     })
  //   );
  // }

  changePassword(changePasswordRequest: ChangePasswordRequest): Observable<any> {
    const email = StorageService.getEmail();
    const url = `${BASIC_URL}api/auth/change-password/${email}`;
    return this.http.post(url, changePasswordRequest, { responseType: 'json' }).pipe(
      map(response => {
        // Convert plain text responses to JSON
        if (typeof response === 'string') {
          return { message: response };
        }
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Change password error', error);
        return throwError(() => new Error('Change password error: ' + error.message));
      })
    );
  }

  reset(resetPassword: any): Observable<any> {
    const email = StorageService.getEmail(); // Replace with the method to get email from local storage
    const url = `${BASIC_URL}forgot-password/changepassword/${email}`;
    
    // Log the request details
    console.log('Request URL:', url);
    console.log('Request Body:', resetPassword);

    return this.http.post(url, resetPassword).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Reset password error', error);
        return throwError(() => new Error('Reset password error: ' + error.message));
      })
    );
  }

  logout(): void {
    this.isAuthenticated = false;
    StorageService.clearUsername();
    StorageService.clearToken();
    StorageService.clearUserId();
  }
}
