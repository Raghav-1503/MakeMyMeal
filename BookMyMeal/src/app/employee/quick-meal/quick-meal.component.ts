// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { BookService } from 'src/app/services/BookMeal/book.service';
// import { StorageService } from 'src/app/services/storage/storage.service';

// @Component({
//   selector: 'app-quick-meal',
//   templateUrl: './quick-meal.component.html',
//   styleUrls: ['./quick-meal.component.css']
// })
// export class QuickMealComponent implements OnInit {
//   @Output() close = new EventEmitter<void>();
//   isVisible: boolean = false;
//   tomorrowDate: string | undefined;
//   selectedCategory: string | null = null;

//   constructor(
//     private bookService: BookService,
//     private storageService: StorageService,
//     private snackBar: MatSnackBar
//   ) {}

//   ngOnInit(): void {
//     this.setTomorrowDate();
//   }

//   setTomorrowDate(): void {
//     const today = new Date();
//     const tomorrow = new Date(today);
//     tomorrow.setDate(today.getDate() + 1);

//     const dayOfWeek = tomorrow.getDay();
//     if (dayOfWeek === 6) { // If tomorrow is Saturday
//       tomorrow.setDate(tomorrow.getDate() + 2); // Move to Monday
//     } else if (dayOfWeek === 0) { // If tomorrow is Sunday
//       tomorrow.setDate(tomorrow.getDate() + 1); // Move to Monday
//     }

//     this.tomorrowDate = tomorrow.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
//   }

//   openPopup(event: Event): void {
//     this.isVisible = true;
//   }

//   closePopup(): void {
//     this.isVisible = false;
//     this.close.emit();
//   }

//   onCategoryChange(event: any): void {
//     this.selectedCategory = event.target.value;
//   }

//   bookMeal(): void {
//     const employeeId = StorageService.getUserId();
//     if (!this.selectedCategory) {
//       this.showToast('Please select a meal type', 'error');
//       return;
//     }

//     const tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);

//     const dayOfWeek = tomorrow.getDay();
//     if (dayOfWeek === 6) { // If tomorrow is Saturday
//       tomorrow.setDate(tomorrow.getDate() + 2); // Move to Monday
//     } else if (dayOfWeek === 0) { // If tomorrow is Sunday
//       tomorrow.setDate(tomorrow.getDate() + 1); // Move to Monday
//     }

//     const formattedDate = tomorrow.toISOString().split('T')[0];

//     const bookingData = {
//       category: this.selectedCategory,
//       startingDate: formattedDate, // Tomorrow's date in YYYY-MM-DD format
//       endingDate: formattedDate, // Tomorrow's date in YYYY-MM-DD format
//       employee_Id: employeeId
//     };

//     console.log(bookingData);
//     this.bookService.BookingBulk(bookingData).subscribe({
//       next: (res) => {
//         console.log(res);
//         this.showToast(res, 'success');
//       },
//       error: (err) => {
//         console.error(err.message);
//         this.showToast(err.error, 'error');
//       }
//     });

//     this.closePopup();
//   }

//   showToast(message: string, action: string): void {
//     let panelClass = '';
//     switch (action) {
//       case 'success':
//         panelClass = 'toast-success';
//         break;
//       case 'error':
//         panelClass = 'toast-error';
//         break;
//       case 'info':
//         panelClass = 'toast-info';
//         break;
//     }

//     this.snackBar.open(message, '', {
//       duration: 3000,
//       panelClass: [panelClass],
//     });
//   }
// }


import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/services/BookMeal/book.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-quick-meal',
  templateUrl: './quick-meal.component.html',
  styleUrls: ['./quick-meal.component.css']
})
export class QuickMealComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  isVisible: boolean = false;
  tomorrowDate: string | undefined;
  selectedCategory: string | null = null;

  constructor(
    private bookService: BookService,
    private storageService: StorageService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.setTomorrowDate();
  }

  setTomorrowDate(): void {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const dayOfWeek = tomorrow.getDay();
    if (dayOfWeek === 6) { // If tomorrow is Saturday
      tomorrow.setDate(tomorrow.getDate() + 2); // Move to Monday
    } else if (dayOfWeek === 0) { // If tomorrow is Sunday
      tomorrow.setDate(tomorrow.getDate() + 1); // Move to Monday
    }

    tomorrow.setMinutes(tomorrow.getMinutes() - tomorrow.getTimezoneOffset());

    this.tomorrowDate = tomorrow.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  openPopup(event: Event): void {
    this.isVisible = true;
  }

  closePopup(): void {
    this.isVisible = false;
    this.close.emit();
  }

  onCategoryChange(event: any): void {
    this.selectedCategory = event.target.value;
  }

  bookMeal(): void {
    const employeeId = StorageService.getUserId();
    if (!this.selectedCategory) {
      this.showToast('Please select a meal type', 'error');
      return;
    }

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const dayOfWeek = tomorrow.getDay();
    if (dayOfWeek === 6) { // If tomorrow is Saturday
      tomorrow.setDate(tomorrow.getDate() + 2); // Move to Monday
    } else if (dayOfWeek === 0) { // If tomorrow is Sunday
      tomorrow.setDate(tomorrow.getDate() + 1); // Move to Monday
    }

    tomorrow.setMinutes(tomorrow.getMinutes() - tomorrow.getTimezoneOffset());

    const formattedDate = tomorrow.toISOString().split('T')[0];

    const bookingData = {
      category: this.selectedCategory,
      startingDate: formattedDate, // Tomorrow's date in YYYY-MM-DD format
      endingDate: formattedDate, // Tomorrow's date in YYYY-MM-DD format
      employee_Id: employeeId
    };

    console.log(bookingData);
    this.bookService.BookingBulk(bookingData).subscribe({
      next: (res) => {
        console.log(res);
        this.showToast(res, 'success');
      },
      error: (err) => {
        console.error(err.message);
        this.showToast(err.error, 'error');
      }
    });

    this.closePopup();
  }

  showToast(message: string, action: string): void {
    let panelClass = '';
    switch (action) {
      case 'success':
        panelClass = 'toast-success';
        break;
      case 'error':
        panelClass = 'toast-error';
        break;
      case 'info':
        panelClass = 'toast-info';
        break;
    }

    this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: [panelClass],
    });
  }
}
