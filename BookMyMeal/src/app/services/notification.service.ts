// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// interface Notification {
//   date: Date;
//   message: string;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class NotificationService {
//   private notifications: Notification[] = [];
//   private notificationCount = new BehaviorSubject<number>(0);

//   notificationCount$ = this.notificationCount.asObservable();

//   constructor() {
//     this.initializeNotifications();
//   }

//   private initializeNotifications(): void {
//     for (let i = 1; i <= 20; i++) {
//       this.notifications.push({
//         date: new Date(),
//         message: `This is notification message number ${i}`
//       });
//     }
//     this.notificationCount.next(this.notifications.length);
//   }

//   getNotifications(): Notification[] {
//     return this.notifications;
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Notification {
  dateTime: Date;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'http://localhost:8080/api/notifications'; // Adjust the URL according to your backend

  constructor(private http: HttpClient) {}

  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.apiUrl);
  }
}
