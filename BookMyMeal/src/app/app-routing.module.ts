// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// import { ForgotPasswordComponent } from './app/forgot-password/forgot-password.component';
// import { authGuard } from './guards/auth.guard';

// const routes: Routes = [
  
//   {path:'home',loadChildren:() =>import('./employee/employee.module').then(m => m.EmployeeModule),canActivate:[authGuard]},
//   {path:'',loadChildren:() =>import('./auth/auth.module').then(m => m.AuthModule)},
//   {path:'ForgotPassword',component:ForgotPasswordComponent},
  
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })

// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotPasswordComponent } from './app/forgot-password/forgot-password.component';
import { authGuard } from './guards/auth.guard';
import { OtpComponent } from './app/otp/otp.component';

const routes: Routes = [
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule), canActivate: [authGuard] },
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'ForgotPassword', component: ForgotPasswordComponent },
  {path:'OTP',component:OtpComponent},
  { path: '**', redirectTo: '' }  // Redirect unknown paths to the home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
