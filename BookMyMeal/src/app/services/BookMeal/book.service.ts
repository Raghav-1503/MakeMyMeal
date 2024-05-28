// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class BookService {

//   private baseUrl = 'http://localhost:8080/api/bookings'; // Adjust the base URL as needed

//   constructor(private http: HttpClient) {}

//   BookingBulk(bookingData: any): Observable<any> {
//     return this.http.post(`${this.baseUrl}/multiple`, bookingData);
//   }


// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8080/api/bookings';

  constructor(private http: HttpClient) {}

  BookingBulk(bookingData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/multiple`, bookingData);
  }

  getCurrentBookings(employeeId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/readAllBooking/${employeeId}`);
  }

  cancelBooking(bookingId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${bookingId}`, { responseType: 'text' });
  }
}
