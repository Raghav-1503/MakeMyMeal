import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  ForgotPasswordForm!: FormGroup;
  isSpinning!: boolean;

  constructor(
    private fb: FormBuilder) { }

  ngOnInit(){
    this.ForgotPasswordForm = this.fb.group({
      emailId:[null, Validators.required,Validators.email],

    })
  }

  submitform(){
    
  }

}
