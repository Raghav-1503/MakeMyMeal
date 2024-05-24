import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BASIC_URL=["http://localhost:8080"]

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}

  BookingBulk(booking: any):Observable<any> {
      return this.http.post(BASIC_URL +"/api/bookings/single",booking);
  }


}
