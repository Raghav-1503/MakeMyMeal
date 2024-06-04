
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/signup/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Router } from '@angular/router';
import { SafeSubscriber } from 'rxjs/internal/Subscriber';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isSpinning = false;
  hide = true;
  loginError = false;  // New property to track login errors

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  submitForm() {
    if (this.loginForm.valid) {
      this.isSpinning = true;
      const email = this.loginForm.get('email')?.value;
      StorageService.saveEmail(email);
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          if (res.jwt) {
            StorageService.saveToken(res.jwt);
            StorageService.saveUsername(res.name);
            StorageService.saveUserId(res.employee_id)
            this.router.navigate(['/employee']);
            this.loginError = false;  // Reset login error
          } else {
            this.loginError = true;  // Set login error
          }
          this.isSpinning = false;
        },
        error: (err) => {
          console.error('Login error', err);
          this.isSpinning = false;
          this.loginError = true;  // Set login error
        }
      });
    } else {
      console.log("Form is invalid");
    }
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }
}
