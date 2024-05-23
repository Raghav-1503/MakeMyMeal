// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
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
//   weekend:boolean | undefined;

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
//       endingDate: [null, [Validators.required, this.dateValidator.bind(this), this.endingDateValidator.bind(this)]],
//       employee_id: [null, [Validators.required]]
//     });

//     this.bookingForm.get('startingDate')?.valueChanges.subscribe(() => {
//       this.bookingForm.get('endingDate')?.updateValueAndValidity();
//     });
//   }

//   booked() {
//     if (this.bookingForm.valid) {
//       console.log(this.bookingForm.value);
//       this.bookService.BookingBulk(this.bookingForm.value).subscribe({
//         next: (res) => {
//           console.log(res);
//           alert("Booking done Successfully!");
//         },
//         error: (err) => {
//           console.log(err.message);
//         }
//       });
//     } else {
//       this.bookingForm.markAllAsTouched();
//     }
//   }

//   onCancel(): void {
//     this.dialogRef.close();
//   }

//   dateValidator(control: AbstractControl): ValidationErrors | null {
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

//   endingDateValidator(control: AbstractControl): ValidationErrors | null {
//     const startingDate = this.bookingForm?.get('startingDate')?.value;
//     const endingDate = control.value;

//     if (!startingDate || !endingDate) {
//       return null;
//     }

//     if (new Date(endingDate) <= new Date(startingDate)) {
//       return { endDateBeforeStartDate: true };
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

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
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
//   weekend: boolean | undefined;

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
//       endingDate: [null, [Validators.required, this.dateValidator.bind(this), this.endingDateValidator.bind(this)]],
//       employee_id: [null, [Validators.required]]
//     });

//     this.bookingForm.get('startingDate')?.valueChanges.subscribe(() => {
//       this.bookingForm.get('endingDate')?.updateValueAndValidity();
//     });
//   }

//   booked() {
//     if (this.bookingForm.valid) {
//       console.log(this.bookingForm.value);
//       this.bookService.BookingBulk(this.bookingForm.value).subscribe({
//         next: (res) => {
//           console.log(res);
//           alert("Booking done Successfully!");
//         },
//         error: (err) => {
//           console.log(err.message);
//         }
//       });
//     } else {
//       this.bookingForm.markAllAsTouched();
//     }
//   }

//   onCancel(): void {
//     this.dialogRef.close();
//   }

//   dateValidator(control: AbstractControl): ValidationErrors | null {
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

//   endingDateValidator(control: AbstractControl): ValidationErrors | null {
//     const startingDate = this.bookingForm?.get('startingDate')?.value;
//     const endingDate = control.value;

//     if (!startingDate || !endingDate) {
//       return null;
//     }

//     if (new Date(endingDate) <= new Date(startingDate)) {
//       return { endDateBeforeStartDate: true };
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
      category: [null, Validators.required],
      startingDate: [null, [Validators.required, this.dateValidator.bind(this)]],
      endingDate: [null, [Validators.required, this.dateValidator.bind(this), this.endingDateValidator.bind(this)]],
      employee_id: [null, Validators.required]
    });

    this.bookingForm.get('startingDate')?.valueChanges.subscribe(() => {
      this.bookingForm.get('endingDate')?.updateValueAndValidity();
    });
  }

  booked() {
    if (this.bookingForm.valid) {
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
    } else {
      this.bookingForm.markAllAsTouched();
      console.log('Form is invalid:', this.bookingForm.errors);
      this.logFormErrors();
    }
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

  endingDateValidator(control: AbstractControl): ValidationErrors | null {
    const startingDate = this.bookingForm?.get('startingDate')?.value;
    const endingDate = control.value;

    if (!startingDate || !endingDate) {
      return null;
    }

    if (new Date(endingDate) <= new Date(startingDate)) {
      return { endDateBeforeStartDate: true };
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

  private logFormErrors() {
    Object.keys(this.bookingForm.controls).forEach(key => {
      const controlErrors = this.bookingForm.get(key)?.errors || null;
      if (controlErrors) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }
}
