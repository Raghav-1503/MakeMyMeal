
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/signup/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  validateForm!: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private route: Router, private service: AuthService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      contactNo: ["", [Validators.required, Validators.pattern('[0-9]{10}')]],
      password: ["", [Validators.required, Validators.pattern('^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])).{8,}$')]],
      checkPassword: ["", [Validators.required, this.confirmationValidator]]
    });
  } 

  confirmationValidator(control: FormControl): { [key: string]: boolean } | null {
    const password = control.root.get('password');
    if (password && control.value !== password.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  signup() { 
    if (this.validateForm.valid) {
      this.service.signup(this.validateForm.value).subscribe((res) => {
        console.log(res);
        this.route.navigateByUrl("/login");
      }, (error) => {
        console.error(error);
      });
    }
  }
}
