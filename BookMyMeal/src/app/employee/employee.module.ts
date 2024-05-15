import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalenderComponent } from './calender/calender.component';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    EmployeeComponent,
    NavbarComponent,
    CalenderComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule
  ]
})
export class EmployeeModule { }
