import { Component } from '@angular/core';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent {

  bookings = [
    { date: '2024-05-18', category: 'Lunch' },
    { date: '2024-05-19', category: 'Dinner' },
    { date: '2024-05-20', category: 'Lunch' },
    { date: '2024-05-20', category: 'Lunch' },
    { date: '2024-05-20', category: 'Lunch' },
    { date: '2024-05-20', category: 'Lunch' },
    { date: '2024-05-20', category: 'Lunch' },
    { date: '2024-05-20', category: 'Lunch' },
    { date: '2024-05-20', category: 'Lunch' },
    { date: '2024-05-20', category: 'Lunch' },
    { date: '2024-05-20', category: 'Lunch' },
    { date: '2024-05-20', category: 'Lunch' },
    { date: '2024-05-20', category: 'Lunch' },
    { date: '2024-05-20', category: 'Lunch' },
    { date: '2024-05-20', category: 'Lunch' },
    { date: '2024-05-20', category: 'Lunch' },
    { date: '2024-05-20', category: 'Lunch' },
    { date: '2024-05-20', category: 'Lunch' },
    { date: '2024-05-20', category: 'Lunch' },
    { date: '2024-05-20', category: 'Lunch' },
  ];

  itemsPerPage = 10;
  currentPage = 1;

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

  cancelBooking(index: number) {
    this.bookings.splice(index, 1);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
  }
}
