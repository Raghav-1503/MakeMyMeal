// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-coupon',
//   templateUrl: './coupon.component.html',
//   styleUrls: ['./coupon.component.css']
// })
// export class CouponComponent {
//   couponCode: string | null = null;

//   generateCoupon(): void {
//     this.couponCode = this.createRandomCouponCode();
//   }

//   createRandomCouponCode(): string {
//     // Example function to generate a random coupon code
//     return Math.random().toString(36).substr(2, 9).toUpperCase();
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent {
  couponCode: string | null = null;

  generateCoupon(): void {
    this.couponCode = this.createRandomCouponCode();
  }

  createRandomCouponCode(): string {
    // Example function to generate a random coupon code
    return Math.random().toString(36).substr(2, 9).toUpperCase();
  }
}
