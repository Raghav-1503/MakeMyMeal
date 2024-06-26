
import { Injectable } from '@angular/core';


const USER = 'user';
const USERNAME = 'username';
const TOKEN = 'token';
const USERID = 'userid';
const EMAIL = 'email'; 

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  static saveEmail(email: string): void {
    window.localStorage.setItem(EMAIL, email);
  }

  static getEmail(): string | null {
    return window.localStorage.getItem(EMAIL);
  }

  static saveUsername(username: string): void {
    window.localStorage.removeItem(USERNAME);
    window.localStorage.setItem(USERNAME, username);
    console.log('Saving username:', username); 
  }

  static saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  static saveUserId(userid: any): void {
    window.localStorage.removeItem(USERID);
    window.localStorage.setItem(USERID, userid);
  }

  static saveUser(user: any): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static getToken(): string | null {
    return window.localStorage.getItem(TOKEN);
  }

  static getUserId(): string | null {
    return window.localStorage.getItem(USERID);
  }

  static getUsername(): string | null {
    const username = window.localStorage.getItem(USERNAME);
    console.log('Retrieved username:', username);  // Log the retrieved username
    return username;
  }

  static getUser(): any {
    const user = window.localStorage.getItem(USER);
    return user ? JSON.parse(user) : null;
  }

  static clearToken(): void {
    window.localStorage.removeItem(TOKEN);
  }

  static clearUser(): void {
    window.localStorage.removeItem(USER);
  }

  static clearUsername(): void {
    window.localStorage.removeItem(USERNAME);
  }

  static clearUserId(): void {
    window.localStorage.removeItem(USERID);
  }

  static clearEmail(): void {
    window.localStorage.removeItem(EMAIL);
  }
}
