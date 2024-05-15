import { Component } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})

export class CalenderComponent {
  selectedDate: any;
  selectedTime: any;
  bookedDates: any[] = []; // Array for booked dates
  canceledDates: any[] = []; // Array for canceled dates
  date: any;

  constructor() {
    this.fillDates();
  }

  fillDates() {
    // Manually enter booked dates
    this.bookedDates = [
      new Date('2024-05-10'), // May 10, 2024
      new Date('2024-05-15'), // May 15, 2024
      new Date('2024-05-20'), // May 20, 2024
      new Date('2024-05-25'), // May 25, 2024
      new Date('2024-05-30')  // May 30, 2024
    ];

    // Manually enter canceled dates
    this.canceledDates = [
      new Date('2024-06-02'), // June 2, 2024
      new Date('2024-06-07'), // June 7, 2024
      new Date('2024-06-12'), // June 12, 2024
      new Date('2024-06-17'), // June 17, 2024
      new Date('2024-06-22')  // June 22, 2024
    ];
  }

  // Method to determine whether a date is a weekend (Saturday or Sunday)
  isWeekend(date: any): boolean {
    if (!date) {
      return false; // If date is undefined, it's not a weekend
    }
    const day = date.getDay();
    return day === 6 || day === 0; // Saturday is 6, Sunday is 0
  }

  // Method to prevent selection of weekends, canceled dates, and past dates
  preventSelection = (date: any): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to compare only dates
    return !this.isWeekend(date) && !this.isCanceled(date) && date >= today;
  }

  isBooked(date: any): boolean {
    return this.bookedDates.some(bookedDate => this.isSameDate(date, bookedDate));
  }

  // Method to check if a date is canceled
  isCanceled(date: any): boolean {
    return this.canceledDates.some(cancelDate => this.isSameDate(date, cancelDate));
  }

  // Method to check if two dates are the same (ignoring time)
  isSameDate(date1: any, date2: any): boolean {
    if (!date1 || !date2) {
      return false; // If either date is undefined, they cannot be the same
    }

    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }

  // Method to update selected time when a date is selected
  updateSelectedTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    this.selectedTime = `${hours}:${minutes}:${seconds}`;
  }
}