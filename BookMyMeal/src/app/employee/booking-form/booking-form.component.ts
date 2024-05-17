import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css'],
})
export class BookingFormComponent{
  bookingForm!: FormGroup;
    
       constructor(private bookService: BookService,
        private fb:FormBuilder,private dialogRef: MatDialogRef<BookingFormComponent>){}

      ngOnInit() {
         this.bookingForm = this.fb.group({
          category: [null, [Validators.required]],
          startingDate: [null, [Validators.required]],
          endingDate: [null, [Validators.required]],
          employee_id: [null, [Validators.required]]
         })
      }


      booked(){
        console.log(this.bookingForm.value);
        this.bookService.BookingBulk(this.bookingForm.value).subscribe({
          next:(res) => {
            console.log(res);
            alert("Booking done Successfully!")
          },
          error:(err)=>{
            console.log(err.message);
          }
        })
      }

      onCancel(): void{
        this.dialogRef.close();
      }
}
