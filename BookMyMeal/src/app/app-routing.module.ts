import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',loadChildren:() =>import('./employee/employee.module').then(m => m.EmployeeModule)},
  {path:'',loadChildren:() =>import('./auth/auth.module').then(m => m.AuthModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }