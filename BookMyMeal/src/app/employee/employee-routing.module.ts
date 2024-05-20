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

const routes: Routes = [
  {path:'',component:EmployeeComponent,children:[
    {path:'',component:CalenderComponent},
    {path:'calender',component:CalenderComponent},
    {path:'',component:MealOfTheDayComponent},
    {path:'viewBooking',component:ViewBookingComponent},
    {path:'coupon',component:CouponComponent},
    {path:'about',component:AboutComponent},
    {path:'privacy-policy',component:PrivacyPolicyComponent},
    {path:'terms',component:TermsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
