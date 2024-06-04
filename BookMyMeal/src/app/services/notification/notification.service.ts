
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// interface Notification {
//   dateTime: Date;
//   message: string;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class NotificationService {
//   private apiUrl = 'http://localhost:8080/api/notifications'; // Adjust the URL according to your backend

//   constructor(private http: HttpClient) {}

//   getNotifications(): Observable<Notification[]> {
//     return this.http.get<Notification[]>(this.apiUrl);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface Notification {
  dateTime: Date;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  private apiUrl = 'http://localhost:8080/api/notifications'; // Adjust the URL according to your backend
  private notificationCountSubject = new BehaviorSubject<number>(0);
  notificationCount$ = this.notificationCountSubject.asObservable();

  constructor(private http: HttpClient) {}

  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.apiUrl).pipe(
      tap(notifications => this.notificationCountSubject.next(notifications.length))
    );
  }

  deleteNotification(notification: Notification) {
    throw new Error('Method not implemented.');
  }

}
