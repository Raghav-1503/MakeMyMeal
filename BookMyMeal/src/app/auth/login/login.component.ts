import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/signup/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isSpinning = false;
  hide = true;

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
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.employee_id != null) {
            const user = {
              id: res.employee_id
            };
            console.log(user);
            StorageService.saveToken(res.jwt);
            StorageService.saveUser(user);
            this.router.navigate(['/employee']);
          } else {
            console.log("Wrong Credentials");
          }
          this.isSpinning = false;
        },
        error: (err) => {
          console.error('Login error', err);
          this.isSpinning = false;
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