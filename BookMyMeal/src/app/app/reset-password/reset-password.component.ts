

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/signup/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  isSpinning!: boolean;
  resetpasswordForm!: FormGroup;
  primary: string = "primary"; 
  registrationSuccess: boolean = false;
  registrationError: boolean = false;
  isLoadingOne!: boolean;
  hide = true;

  constructor(private service: AuthService, private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.resetpasswordForm = this.fb.group({
      password: ["", [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/)]],
      checkPassword: ["", [Validators.required]]
    }, { validators: this.confirmationValidator });
  }

  confirmationValidator = (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.get('password');
    const confirm = control.get('checkPassword');
  
    if (!password || !confirm) {
      return null;
    }
  
    if (password.value !== confirm.value) {
      return { passwordMismatch: true };
    }
  
    return null;
  };

  reset() {
    if (this.resetpasswordForm.invalid) {
      return;
    }
  
    this.isSpinning = true;
  
    const formValue = {
      password: this.resetpasswordForm.get('password')?.value,
      repeatpassword: this.resetpasswordForm.get('checkPassword')?.value,
    };

    // Log the form data to console
    console.log('Form data:', formValue);
  
    this.service.reset(formValue).subscribe(
      (res) => {
        this.registrationSuccess = true;
        this.isSpinning = false;
        this.snackBar.open('Password changed successfully!', 'Close', {
          duration: 3000
        });
        this.router.navigateByUrl("/login");
      },
      (error) => {
        this.registrationError = true;
        this.isSpinning = false;
        this.snackBar.open('Password is not changed', 'Close', {
          duration: 3000
        });
        console.error('Error response:', error);
      }
    );
  }
}
