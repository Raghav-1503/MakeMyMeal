// import { Injectable } from '@angular/core';

// const TOKEN = 'token'
// const USER = 'user'

// @Injectable({
//   providedIn: 'root'
// })
// export class StorageService {

//   constructor() { }

//   static saveToken(token:string):void{
//     window.localStorage.removeItem(TOKEN);
//     window.localStorage.setItem(TOKEN,token);

//   }

//   static saveUser(user:any):void{
//     window.localStorage.removeItem(USER);
//     window.localStorage.setItem(USER,JSON.stringify(user));

//   }

// }

import { Injectable } from '@angular/core';

const TOKEN = 'token';
const USER = 'user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  static saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  static saveUser(user: any): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static getToken(): string | null {
    return window.localStorage.getItem(TOKEN);
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
}
