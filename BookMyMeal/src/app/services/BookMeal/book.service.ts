import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:8080/api/bookings'; // Adjust the base URL as needed

  constructor(private http: HttpClient) {}

  BookingBulk(bookingData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/multiple`, bookingData);
  }


}
