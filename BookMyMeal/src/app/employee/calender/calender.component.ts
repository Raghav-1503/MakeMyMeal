// import { Component } from '@angular/core';
// import { BookingFormComponent } from '../booking-form/booking-form.component';
// import { MatDialog } from '@angular/material/dialog';

// @Component({
//   selector: 'app-calender',
//   templateUrl: './calender.component.html',
//   styleUrls: ['./calender.component.css']
// })

// export class CalenderComponent {
//   selectedDate: any;
//   selectedTime: any;
//   bookedDates: Date[] = [];
//   canceledDates: Date[] = [];
// QuickMealComponent: any;

//   constructor(private dialogRef: MatDialog) {
//     this.fillDates();
//   }

//   fillDates() {
//     this.bookedDates = [
//       new Date('2024-07-10'),
//       new Date('2024-07-15'),
//       new Date('2024-07-20'),
//       new Date('2024-07-25'),
//       new Date('2024-07-30')
//     ];

//     this.canceledDates = [
//       new Date('2024-06-02'),
//       new Date('2024-06-07'),
//       new Date('2024-06-12'),
//       new Date('2024-06-17'),
//       new Date('2024-06-22')
//     ];
//   }

//   isWeekend(date: Date): boolean {
//     const day = date.getDay();
//     return day === 6 || day === 0;
//   }

//   preventSelection = (date: Date): boolean => {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
//     return date >= today && !this.isCanceled(date) && !this.isWeekend(date);
//   }

//   anotherDateFilter = (date: Date): boolean => {
//     // Add your additional date filter logic here
//     // Example: Allow only weekdays
//     const day = date.getDay();
//     return day !== 0 && day !== 6;
//   }

//   bookedSelection = (date: Date): boolean => {
//     // const today = new Date();
//     // today.setHours(0, 0, 0, 0);
//     return this.isBooked(date);
//   }

//   combinedDateFilter = (date: Date): boolean => {
//     // Combine both date filters into one
//     return this.preventSelection(date) && this.anotherDateFilter(date) && !this.bookedSelection(date);
//   }

//   isBooked(date: Date): boolean {
//     return this.bookedDates.some(bookedDate => this.isSameDate(date, bookedDate));
//   }

//   isCanceled(date: Date): boolean {
//     return this.canceledDates.some(cancelDate => this.isSameDate(date, cancelDate));
//   }

//   isSameDate(date1: Date, date2: Date): boolean {
//     return date1.getFullYear() === date2.getFullYear() &&
//            date1.getMonth() === date2.getMonth() &&
//            date1.getDate() === date2.getDate();
//   }

//   getDateClass(date: Date): string {
//     if (this.isCanceled(date)) {
//       return 'canceled';
//     } else if (this.isBooked(date)) {
//       return 'booked';
//     } else if (this.isWeekend(date)) {
//       return 'custom-weekend';
//     }
//     return '';
//   }

//   updateSelectedTime() {
//     const currentTime = new Date();
//     const hours = currentTime.getHours().toString().padStart(2, '0');
//     const minutes = currentTime.getMinutes().toString().padStart(2, '0');
//     const seconds = currentTime.getSeconds().toString().padStart(2, '0');
//     this.selectedTime = `${hours}:${minutes}:${seconds}`;
//   }

//   isPopupVisible: boolean = false;

//   openPopup(event: Event): void {
//     event.preventDefault();
//     this.isPopupVisible = true;
//   }

//   closePopup(): void {
//     this.isPopupVisible = false;
//   }
//   openDialog() {
//     this.dialogRef.open(BookingFormComponent);
//   }

// }

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { CalendarEvent } from 'angular-calendar';
import { StorageService } from 'src/app/services/storage/storage.service';
import { BookService } from 'src/app/services/BookMeal/book.service';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  selectedDate: any;
  selectedTime: any;
  bookedDates: Date[] = [];
  canceledDates: Date[] = [];
  isButtonDisabled: boolean = false;

  constructor(private dialogRef: MatDialog,private bookService: BookService) {
    this.fillDates();
  }

  ngOnInit(): void {
    this.checkButtonStatus();
    this.fetchBookings();
    setInterval(() => this.checkButtonStatus(), 60000); // Check every minute
  }

  fillDates() {
    this.bookedDates = [];
    this.canceledDates = [];
  }

  checkButtonStatus() {
    const now = new Date();
    const hours = now.getHours();
    this.isButtonDisabled = hours >= 20 && hours < 24;
  }

  isWeekend(date: Date): boolean {
    const day = date.getDay();
    return day === 6 || day === 0;
  }

  preventSelection = (date: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today && !this.isCanceled(date) && !this.isWeekend(date);
  }

  anotherDateFilter = (date: Date): boolean => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  bookedSelection = (date: Date): boolean => {
    return this.isBooked(date);
  }

  combinedDateFilter = (date: Date): boolean => {
    return this.preventSelection(date) && this.anotherDateFilter(date) && !this.bookedSelection(date);
  }

  isBooked(date: Date): boolean {
    return this.bookedDates.some(bookedDate => this.isSameDate(date, bookedDate));
  }

  isCanceled(date: Date): boolean {
    return this.canceledDates.some(cancelDate => this.isSameDate(date, cancelDate));
  }

  isSameDate(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }

  getDateClass(date: Date): string {
    if (this.isCanceled(date)) {
      return 'canceled';
    } else if (this.isBooked(date)) {
      return 'booked';
    } else if (this.isWeekend(date)) {
      return 'custom-weekend';
    }
    return '';
  }

  updateSelectedTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    this.selectedTime = `${hours}:${minutes}:${seconds}`;
  }

  isPopupVisible: boolean = false;

  openPopup(event: Event): void {
    event.preventDefault();
    this.isPopupVisible = true;
  }

  closePopup(): void {
    this.isPopupVisible = false;
  }

  openDialog() {
    this.dialogRef.open(BookingFormComponent);
  }
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate) => {
    
    if (this.isBooked(cellDate)) {
      return 'booked-date';
    }
  
  return '';
};

getCurrentLoggedInEmployeeId(): number {
  const userId = StorageService.getUserId();
  return userId ? parseInt(userId, 10) : 0;
}

fetchBookings() {
  const employeeId = this.getCurrentLoggedInEmployeeId();
  this.bookService.getCurrentBookings(employeeId).subscribe(
    (data) => {
      this.bookedDates = data.map((booking: any) => new Date(booking.bookingDate));
    },
    (error) => {
      console.error('Error fetching bookings:', error);
    }
  );
}



}
