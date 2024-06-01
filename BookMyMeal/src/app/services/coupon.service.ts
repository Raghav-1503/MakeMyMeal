import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  private baseUrl = 'http://localhost:8080/api/coupons';

  constructor(private http: HttpClient) {}

  generateCoupon(employeeId: number, date: string, category: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/generate`, null, {
      params: {
        employeeId: employeeId.toString(),
        date: date,
        category: category
      }
    });
  }
  

  redeemCoupon(couponId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/redeem/${couponId}`, {});
  }

  checkCouponExists(bookingId: number, date: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/checkCoupon`, {
      params: {
        bookingId: bookingId.toString(),
        date: date
      }
    });
  }
  
}
