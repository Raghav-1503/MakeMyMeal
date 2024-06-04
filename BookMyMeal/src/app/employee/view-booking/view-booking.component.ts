// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { StorageService } from 'src/app/services/storage/storage.service';
// import { BookService } from 'src/app/services/BookMeal/book.service'; // Ensure this path is correct

// @Component({
//   selector: 'app-view-booking',
//   templateUrl: './view-booking.component.html',
//   styleUrls: ['./view-booking.component.css']
// })
// export class ViewBookingComponent implements OnInit {
//   bookings: any[] = [];
//   itemsPerPage = 10;
//   currentPage = 1;

//   constructor(private bookService: BookService) {}

//   ngOnInit() {
//     this.fetchBookings();
//   }

//   getCurrentLoggedInEmployeeId(): number {
//     const userId = StorageService.getUserId();
//     return userId ? parseInt(userId, 10) : 0; // Default to 0 if not found
//   }

//   currentEmployeeId = this.getCurrentLoggedInEmployeeId();

//   fetchBookings() {
//     this.bookService.getCurrentBookings(this.currentEmployeeId).subscribe(
//       (data) => {
//         this.bookings = data;
//       },
//       (error) => {
//         console.error('Error fetching bookings:', error);
//       }
//     );
//   }

//   get totalPages(): number {
//     return Math.ceil(this.bookings.length / this.itemsPerPage);
//   }

//   get paginatedBookings() {
//     const start = (this.currentPage - 1) * this.itemsPerPage;
//     const end = start + this.itemsPerPage;
//     return this.bookings.slice(start, end);
//   }

//   previousPage() {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//     }
//   }

//   nextPage() {
//     if (this.currentPage < this.totalPages) {
//       this.currentPage++;
//     }
//   }

//   cancelBooking(index: number) {
//     const bookingIndex = (this.currentPage - 1) * this.itemsPerPage + index;
//     this.bookings.splice(bookingIndex, 1);
//     if (this.currentPage > this.totalPages) {
//       this.currentPage = this.totalPages;
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StorageService } from 'src/app/services/storage/storage.service';
import { BookService } from 'src/app/services/BookMeal/book.service';
import { CancelBookingDialogComponent } from '../cancel-booking-dialog/cancel-booking-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Booking {
  bookingDate: Date;
  category: string;
  bookingId: number;
}

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {
  bookings: Booking[] = [];
  itemsPerPage = 10;
  currentPage = 1;

  constructor(private bookService: BookService, private dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.fetchBookings();
  }

  getCurrentLoggedInEmployeeId(): number {
    const userId = StorageService.getUserId();
    return userId ? parseInt(userId, 10) : 0;
  }

  fetchBookings() {
    const employeeId = this.getCurrentLoggedInEmployeeId();
    this.bookService.getCurrentBookings(employeeId).subscribe(
      (data) => {
        this.bookings = data.map((booking: any) => ({
          bookingId: booking.booking_id,
          bookingDate: new Date(booking.bookingDate),
          category: booking.category
        }));
        this.sortBookings();
      },
      (error) => {
        console.error('Error fetching bookings:', error);
      }
    );
  }

  sortBookings() {
    this.bookings.sort((a, b) => {
      // Sort by booking date
      if (a.bookingDate < b.bookingDate) return -1;
      if (a.bookingDate > b.bookingDate) return 1;
      // If dates are equal, sort by lunch category
      if (a.bookingDate.getTime() === b.bookingDate.getTime()) {
        if (a.category === 'Lunch' && b.category !== 'Lunch') return -1;
        if (a.category !== 'Lunch' && b.category === 'Lunch') return 1;
        // If categories are the same or neither is lunch, leave them unchanged
      }
      return 0;
    });
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  get totalPages(): number {
    return Math.ceil(this.bookings.length / this.itemsPerPage);
  }

  get paginatedBookings() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.bookings.slice(start, end);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  openCancelDialog(booking: Booking) {
    const dialogRef = this.dialog.open(CancelBookingDialogComponent, {
      data: booking
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cancelBooking(booking);
        this.snackBar.open('Booking canceled', 'Close', {
          duration: 3000,
        });
      }
    });
  }

  cancelBooking(booking: Booking) {
    this.bookService.cancelBooking(booking.bookingId).subscribe(
      (response) => {
        // Remove the booking from the frontend
        this.bookings = this.bookings.filter(b => b !== booking);
        // Handle pagination if needed
        this.adjustPagination();
      },
      (error) => {
        console.error('Error cancelling booking:', error);
      }
    );
  }

  adjustPagination() {
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
  }
}
