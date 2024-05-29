// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

// @Component({
//   selector: 'app-change-password',
//   templateUrl: './change-password.component.html',
//   styleUrls: ['./change-password.component.css']
// })
// export class ChangePasswordComponent {
//   changepasswordForm: FormGroup;
//   hideOld = true;
//   hideNew = true;
//   hideConfirm = true;

//   constructor(private fb: FormBuilder) {
//     this.changepasswordForm = this.fb.group({
//       oldPassword: ['', [Validators.required]],
//       newPassword: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
//       confirmNewPassword: ['', [Validators.required]]
//     }, { validator: this.passwordMatchValidator });
//   }

//   passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
//     const newPassword = control.get('newPassword')?.value;
//     const confirmNewPassword = control.get('confirmNewPassword')?.value;

//     if (newPassword !== confirmNewPassword) {
//       control.get('confirmNewPassword')?.setErrors({ passwordMismatch: true });
//       return { passwordMismatch: true };
//     } else {
//       control.get('confirmNewPassword')?.setErrors(null);
//       return null;
//     }
//   }

//   changePassword() {
//     if (this.changepasswordForm.valid) {
//       // Handle the change password logic
//       console.log('Password changed successfully');
//     }
//   }
// }

// change-password.component.ts

import { ChangePasswordRequest } from "src/app/app/change-pssword-request.model";
import { Component } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/signup/auth.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
 
  changepasswordForm!: FormGroup;
  hideOld = true;
  hideNew = true;
  hideConfirm = true;

  constructor(private fb: FormBuilder,private authService: AuthService) {
    this.changepasswordForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
      confirmNewPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const newPassword = control.get('newPassword')?.value;
    const confirmNewPassword = control.get('confirmNewPassword')?.value;

    if (newPassword !== confirmNewPassword) {
      control.get('confirmNewPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      control.get('confirmNewPassword')?.setErrors(null);
      return null;
    }
  }

  changePassword() {
    if (this.changepasswordForm.valid) {
      const changePasswordRequest: ChangePasswordRequest = {
        oldPassword: this.changepasswordForm.get('oldPassword')?.value,
        newPassword: this.changepasswordForm.get('newPassword')?.value
      };
      
      this.authService.changePassword(changePasswordRequest).subscribe(
        response => {
          console.log('Password changed successfully', response);
          // Handle successful password change (e.g., show a success message, redirect)
        },
        error => {
          console.error('Error changing password', error);
          // Handle error (e.g., show an error message)
        }
      );
    }
  }
}
