import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  loginForm!: FormGroup;
  isSpinning!: boolean;
  hide =true;
  hidePassword: any;

  constructor(
    private fb: FormBuilder) { }

  ngOnInit(){
    this.loginForm = this.fb.group({
      emailId:[null, Validators.required,Validators.email],
      password: [null, Validators.required]

    })
  }

  submitform(){
    
  }

}
