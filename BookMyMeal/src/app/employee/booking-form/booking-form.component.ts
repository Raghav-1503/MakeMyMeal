// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatDialogRef } from '@angular/material/dialog';
// import { BookService } from 'src/app/services/book.service';

// @Component({
//   selector: 'app-booking-form',
//   templateUrl: './booking-form.component.html',
//   styleUrls: ['./booking-form.component.css'],
// })
// export class BookingFormComponent implements OnInit {
//   bookingForm!: FormGroup;
//   minDate: string;
//   maxDate: string;

//   constructor(
//     private bookService: BookService,
//     private fb: FormBuilder,
//     private dialogRef: MatDialogRef<BookingFormComponent>
//   ) {
//     const today = new Date();
//     this.minDate = this.formatDate(today);

//     const maxDate = new Date();
//     maxDate.setMonth(today.getMonth() + 3);
//     this.maxDate = this.formatDate(maxDate);
//   }

//   ngOnInit() {
//     this.bookingForm = this.fb.group({
//       category: [null, [Validators.required]],
//       startingDate: [null, [Validators.required, this.dateValidator.bind(this)]],
//       endingDate: [null, [Validators.required, this.dateValidator.bind(this)]],
//       employee_id: [null, [Validators.required]]
//     });
//   }

//   booked() {
//     console.log(this.bookingForm.value);
//     this.bookService.BookingBulk(this.bookingForm.value).subscribe({
//       next: (res) => {
//         console.log(res);
//         alert("Booking done Successfully!");
//       },
//       error: (err) => {
//         console.log(err.message);
//       }
//     });
//   }

//   onCancel(): void {
//     this.dialogRef.close();
//   }

//   dateValidator(control: any): { [key: string]: boolean } | null {
//     const date = new Date(control.value);
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     if (isNaN(date.getTime())) {
//       return { invalidDate: true };
//     }

//     const maxDate = new Date();
//     maxDate.setMonth(today.getMonth() + 3);

//     if (date < today || date > maxDate) {
//       return { invalidRange: true };
//     }

//     const day = date.getDay();
//     if (day === 0 || day === 6) {
//       return { weekend: true };
//     }

//     return null;
//   }

//   validateDateRange(field: string) {
//     const control = this.bookingForm.get(field);
//     if (control) {
//       control.updateValueAndValidity();
//     }
//   }

//   formatDate(date: Date): string {
//     const day = date.getDate().toString().padStart(2, '0');
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const year = date.getFullYear();
//     return `${year}-${month}-${day}`;
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css'],
})
export class BookingFormComponent implements OnInit {
  bookingForm!: FormGroup;
  minDate: string;
  maxDate: string;

  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BookingFormComponent>
  ) {
    const today = new Date();
    this.minDate = this.formatDate(today);

    const maxDate = new Date();
    maxDate.setMonth(today.getMonth() + 3);
    this.maxDate = this.formatDate(maxDate);
  }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      category: [null, [Validators.required]],
      startingDate: [null, [Validators.required, this.dateValidator.bind(this)]],
      endingDate: [null, [Validators.required, this.dateValidator.bind(this)]],
      employee_id: [null, [Validators.required]]
    });
  }

  booked() {
    console.log(this.bookingForm.value);
    this.bookService.BookingBulk(this.bookingForm.value).subscribe({
      next: (res) => {
        console.log(res);
        alert("Booking done Successfully!");
      },
      error: (err) => {
        console.log(err.message);
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  dateValidator(control: AbstractControl): ValidationErrors | null {
    const date = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(date.getTime())) {
      return { invalidDate: true };
    }

    const maxDate = new Date();
    maxDate.setMonth(today.getMonth() + 3);

    if (date < today || date > maxDate) {
      return { invalidRange: true };
    }

    const day = date.getDay();
    if (day === 0 || day === 6) {
      return { weekend: true };
    }

    return null;
  }

  validateDateRange(field: string) {
    const control = this.bookingForm.get(field);
    if (control) {
      control.updateValueAndValidity();
    }
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
}
