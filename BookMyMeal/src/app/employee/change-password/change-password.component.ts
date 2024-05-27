import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  ChangePasswordForm!: FormGroup;
  isSpinning!: boolean;

  hide = true;;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.ChangePasswordForm = this.fb.group({
      emailId: [null, Validators.required, Validators.email],
    });
  }

  submitform() {}
}
