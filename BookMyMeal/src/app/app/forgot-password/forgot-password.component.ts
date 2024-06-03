import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/signup/auth.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  ForgotPasswordForm!: FormGroup;
  isSpinning: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.ForgotPasswordForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]]
    });
  }

  submitform() {
    if (this.ForgotPasswordForm.invalid) {
      return;
    }

    this.isSpinning = true; // Disable the button
    const email = this.ForgotPasswordForm.get('emailId')?.value;

    this.authService.sendVerificationEmail(email).subscribe(
      () => {
        this.isSpinning = false; // Re-enable the button
        this.snackBar.open('Email sent successfully!', 'Close', {
          duration: 3000
        });
        StorageService.saveEmail(email);
        console.log('Navigating to OTP component');
        this.router.navigate(['/otp']);
      },
      (error) => {
        this.isSpinning = false; // Re-enable the button even on error
        this.snackBar.open('Cannot send email. Please try again.', 'Close', {
          duration: 3000
        });
        console.error('Navigation to OTP failed', error);
      }
    );
  }
}
