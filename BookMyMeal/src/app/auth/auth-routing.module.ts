import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from '../employee/employee.component';
import { CalenderComponent } from '../employee/calender/calender.component';
import { MealOfTheDayComponent } from '../employee/meal-of-the-day/meal-of-the-day.component';
import { ViewBookingComponent } from '../employee/view-booking/view-booking.component';
import { CouponComponent } from '../employee/coupon/coupon.component';
import { AboutComponent } from '../app/about/about.component';
import { PrivacyPolicyComponent } from '../app/privacy-policy/privacy-policy.component';
import { TermsComponent } from '../app/terms/terms.component';
import { ChangePasswordComponent } from '../employee/change-password/change-password.component';
import { ForgotPasswordComponent } from '../app/forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'',component:SignupComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
