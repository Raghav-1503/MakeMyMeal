import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { AboutComponent } from '../app/about/about.component';
import { PrivacyPolicyComponent } from '../app/privacy-policy/privacy-policy.component';
import { TermsComponent } from '../app/terms/terms.component';

const routes: Routes = [
  {path:'',component:EmployeeComponent,children:[
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
