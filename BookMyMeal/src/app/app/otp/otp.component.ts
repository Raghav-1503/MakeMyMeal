import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/signup/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  OtpForm!: FormGroup;
  isSpinning: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    const email = StorageService.getEmail(); // Retrieve the email from local storage
    this.OtpForm = this.fb.group({
      email: [email, [Validators.required, Validators.email]], // Set the email in the form
      otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
  }

  verifyOtp() {
    if (this.OtpForm.invalid) {
      return;
    }

    this.isSpinning = true;
    const email = this.OtpForm.get('email')?.value;
    const otp = this.OtpForm.get('otp')?.value;

    this.authService.verifyOtp({ email, otp }).subscribe(
      () => {
        this.isSpinning = false;
        this.snackBar.open('OTP verified successfully!', 'Close', {
          duration: 3000
        });
        this.router.navigate(['/resetPasssword']); // Ensure this route is correct in your routing module
      },
      (error) => {
        this.isSpinning = false;
        this.snackBar.open('Invalid OTP. Please try again.', 'Close', {
          duration: 3000
        });
      }
    );
  }
}

