import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {

  OtpForm!: FormGroup;
  isSpinning!: boolean;

  constructor(
    private fb: FormBuilder) { }

  ngOnInit(){
    this.OtpForm = this.fb.group({
      otp:[null, Validators.required,Validators.email],

    })
  }

  submitform(){
    
  }

}
