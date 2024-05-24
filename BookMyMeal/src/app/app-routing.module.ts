import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './app/forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'home',loadChildren:() =>import('./employee/employee.module').then(m => m.EmployeeModule)},
  {path:'',loadChildren:() =>import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'ForgotPassword',component:ForgotPasswordComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }