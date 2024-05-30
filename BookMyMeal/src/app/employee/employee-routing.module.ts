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
  { path: '', redirectTo: 'employee', pathMatch: 'full' }, // Redirect root to employee
  {
    path: 'employee',
    component: EmployeeComponent,
    children: [
      { path: '', redirectTo: 'calender', pathMatch: 'full' }, // Default child route
      { path: 'calender', component: CalenderComponent },
      { path: 'meal-of-the-day', component: MealOfTheDayComponent },
      { path: 'viewBooking', component: ViewBookingComponent },
      { path: 'coupon', component: CouponComponent },
      { path: 'about', component: AboutComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'terms', component: TermsComponent },
      { path: 'changePassword', component: ChangePasswordComponent },
      // { path: 'ForgotPassword', component: ForgotPasswordComponent },
      // { path: 'OTP', component: OtpComponent },
      // { path: 'resetPasssword', component: ResetPasswordComponent },
  
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
