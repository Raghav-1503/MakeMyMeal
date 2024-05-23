import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { AboutComponent } from '../app/about/about.component';
import { PrivacyPolicyComponent } from '../app/privacy-policy/privacy-policy.component';
import { TermsComponent } from '../app/terms/terms.component';
import { CalenderComponent } from './calender/calender.component';
import { MealOfTheDayComponent } from './meal-of-the-day/meal-of-the-day.component';
import { CouponComponent } from './coupon/coupon.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
