import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  
  {path:'home',loadChildren:() =>import('./employee/employee.module').then(m => m.EmployeeModule)},
  {path:'',loadChildren:() =>import('./auth/auth.module').then(m => m.AuthModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard] 
})

export class AppRoutingModule { }