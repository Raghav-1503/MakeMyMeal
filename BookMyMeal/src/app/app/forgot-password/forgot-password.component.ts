import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../environment';

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
    private http: HttpClient,
    private snackBar: MatSnackBar
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

    this.isSpinning = true;
    const email = this.ForgotPasswordForm.get('emailId')?.value;

    this.http.post(`${environment.apiUrl}/forgot-password/verifyMail/${email}`, {}).subscribe(
      () => {
        this.isSpinning = false;
        this.snackBar.open('Email sent successfully!', 'Close', {
          duration: 3000
        });
      },
      (error) => {
        this.isSpinning = false;
        this.snackBar.open('Cannot send email. Please try again.', 'Close', {
          duration: 3000
        });
      }
    );
  }
}
