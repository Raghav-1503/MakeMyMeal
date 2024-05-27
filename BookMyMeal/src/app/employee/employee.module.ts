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
import { BookService } from '../services/BookMeal/book.service';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { CouponComponent } from './coupon/coupon.component';
import { QrCodeModule } from 'ng-qrcode';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { NotificationComponent } from './notification/notification.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    EmployeeComponent,
    NavbarComponent,
    CalenderComponent,
    MealOfTheDayComponent,
    QuickMealComponent,
    BookingFormComponent,
    CouponComponent,
    ViewBookingComponent,
    ChangePasswordComponent,
    NotificationComponent,

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
    MatButtonModule,
    MatInputModule,
    QrCodeModule,
    MatRadioModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [BookService]
})
export class EmployeeModule { }
