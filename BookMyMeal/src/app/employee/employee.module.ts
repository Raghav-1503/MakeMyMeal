import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalenderComponent } from './calender/calender.component';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MealOfTheDayComponent } from './meal-of-the-day/meal-of-the-day.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { QuickMealComponent } from './quick-meal/quick-meal.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { BookService } from 'src/app/services/book.service';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { CouponComponent } from './coupon/coupon.component';
import { QrCodeModule } from 'ng-qrcode';


@NgModule({
  declarations: [
    EmployeeComponent,
    NavbarComponent,
    CalenderComponent,
    MealOfTheDayComponent,
    QuickMealComponent,
    BookingFormComponent,
    CouponComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    FullCalendarModule,
    ReactiveFormsModule,
    FormsModule,
    QrCodeModule
  ],
  providers: [BookService]
})
export class EmployeeModule { }
