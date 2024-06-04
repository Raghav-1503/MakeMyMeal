import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/BookMeal/book.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { CouponService } from 'src/app/services/coupon/coupon.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Booking {
  bookingDate: string;
  category: 'Lunch' | 'Dinner';
}

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
  bookings: Booking[] = [];
  filteredBookings: Booking[] = [];
  today: Date = new Date();
  generatedCoupon: any = null; // Store generated coupon details
  qrCodeData: string = '';
  countdown: number = 15;
  countdownInterval: any;

  // State to track coupon generation
  isLunchCouponGenerated: boolean = false;
  isDinnerCouponGenerated: boolean = false;
  isCouponExists: boolean = false;

  constructor(
    private bookService: BookService,
    private storageService: StorageService,
    private couponService: CouponService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.checkBookingStatus();
    this.checkGenerateButtonState();
  }

  checkBookingStatus(): void {
    const userId = Number(StorageService.getUserId());
    this.bookService.getCurrentBookings(userId).subscribe(
      (bookings: Booking[]) => {
        this.bookings = bookings.filter(booking => 
          new Date(booking.bookingDate).toDateString() === this.today.toDateString()
        );

        console.log('Bookings before sorting:', this.bookings);

        // Sort bookings by date and then by category (lunch before dinner)
        this.sortBookings();

        console.log('Bookings after sorting:', this.bookings);

        // Filter bookings based on current time
        this.filterBookingsByTime();
      },
      (error) => {
        console.error('Error fetching bookings', error);
      }
    );
  }

  sortBookings(): void {
    this.bookings.sort((a, b) => {
      // If dates are equal, sort by category (lunch before dinner)
      if (a.category === 'Lunch' && b.category !== 'Lunch') return -1;
      if (a.category !== 'Lunch' && b.category === 'Lunch') return 1;

      // If categories are the same or neither is lunch, leave them unchanged
      return 0;
    });
  }

  filterBookingsByTime(): void {
    const currentHour = this.today.getHours();
    const currentMinute = this.today.getMinutes();
    const currentTime = currentHour * 60 + currentMinute; // Convert current time to minutes

    this.filteredBookings = this.bookings.filter(booking => {
      if (booking.category === 'Lunch') {
        return currentTime <= (15 * 60); // 3:00 pm in minutes
      } else if (booking.category === 'Dinner') {
        return currentTime <= (21 * 60); // 9:00 pm in minutes
      }
      return false;
    });

    console.log('Filtered Bookings:', this.filteredBookings);
  }

  canGenerateCoupon(category: 'Lunch' | 'Dinner'): boolean {
    const currentHour = this.today.getHours();
    const currentMinute = this.today.getMinutes();
    const currentTime = currentHour * 60 + currentMinute; // Convert current time to minutes

    const lunchStart = 9 * 60; // 12:00 pm in minutes
    const lunchEnd = 15 * 60; // 3:00 pm in minutes
    const dinnerStart = 17 * 60; // 7:00 pm in minutes
    const dinnerEnd = 21 * 60; // 9:00 pm in minutes

    // Check if the current time is within the specified range and the coupon is not yet generated
    if (category === 'Lunch' && currentTime >= lunchStart && currentTime <= lunchEnd) {
      return this.filteredBookings.some(booking => booking.category === 'Lunch') && !this.isLunchCouponGenerated;
    }

    if (category === 'Dinner' && currentTime >= dinnerStart && currentTime <= dinnerEnd) {
      return this.filteredBookings.some(booking => booking.category === 'Dinner') && !this.isDinnerCouponGenerated;
    }

    return false;
  }

  generateCoupon(category: 'Lunch' | 'Dinner'): void {
    const userId = Number(StorageService.getUserId());
    const today = this.getLocalFormattedDate();

    this.couponService.generateCoupon(userId, today, category).subscribe(
      (coupon) => {
        this.generatedCoupon = { id: coupon.id, code: coupon.code, category };
        this.qrCodeData = today.toString();
        this.snackBar.open('Coupon generated successfully!', 'Close', {
          duration: 3000,
        });
        this.startCountdown();
        if (category === 'Lunch') {
          this.isLunchCouponGenerated = true;
        } else if (category === 'Dinner') {
          this.isDinnerCouponGenerated = true;
        }
      },
      (error) => {
        console.error('Already generated', error);
        this.snackBar.open('coupon is already reedemed', 'Close', {
          duration: 3000,
        });
      }
    );
  }

  getLocalFormattedDate(): string {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    return today.toISOString().split('T')[0];
  }

  startCountdown(): void {
    this.countdown = 15;
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(this.countdownInterval);
        this.generatedCoupon = null; // Clear the generated coupon after the countdown
      }
    }, 1000);
  }

  checkGenerateButtonState(): void {
    const currentHour = this.today.getHours();
    const currentMinute = this.today.getMinutes();
    const currentTime = currentHour * 60 + currentMinute; // Convert current time to minutes

    const lunchEnd = 15 * 60; // 3:00 pm in minutes
    const dinnerEnd = 21 * 60; // 9:00 pm in minutes

    // Reset the coupon generation state based on the time
    if (currentTime > lunchEnd && currentTime < dinnerEnd) {
      this.isLunchCouponGenerated = false;
    }
    if (currentTime > dinnerEnd) {
      this.isLunchCouponGenerated = false;
      this.isDinnerCouponGenerated = false;
    }
  }

  checkCouponExistence(bookingId: number, date: string): void {
    this.couponService.checkCouponExists(bookingId, date).subscribe(
      (response) => {
        // If coupon exists, disable the generate coupon button
        this.isCouponExists = response;
      },
      (error) => {
        console.error('Error checking coupon existence', error);
      }
    );
  }
  
}
