
// import { Component } from "@angular/core";
// import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { ChangePasswordRequest } from "src/app/app/change-password-request.model";
// import { AuthService } from "src/app/services/signup/auth.service";
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { Router } from "@angular/router";

// @Component({
//   selector: 'app-change-password',
//   templateUrl: './change-password.component.html',
//   styleUrls: ['./change-password.component.css']
// })
// export class ChangePasswordComponent {
 
//   changepasswordForm!: FormGroup;
//   hideOld = true;
//   hideNew = true;
//   hideConfirm = true;

//   constructor(private fb: FormBuilder,private authService: AuthService, private snackBar: MatSnackBar,private route: Router) {
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
//       const changePasswordRequest: ChangePasswordRequest = {
//         oldPassword: this.changepasswordForm.get('oldPassword')?.value,
//         newPassword: this.changepasswordForm.get('newPassword')?.value
//       };

//       this.authService.changePassword(changePasswordRequest).subscribe(
//         (response) => {
//           this.snackBar.open('Password changed successfully', 'Close', {
//             duration: 3000
//           });
//           console.log(response);
//           this.route.navigateByUrl("/login");
//         },
//         error => {
//           this.snackBar.open('Error changing password: ' + error.message, 'Close', {
//             duration: 3000
//           });
//         }
//       );
//     }
//   }
// }

import { Component } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/signup/auth.service";
import { ChangePasswordRequest } from "src/app/app/change-password-request.model"; // Assuming this model exists
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";

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

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private route: Router
  ) {
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
          const message = response.message || 'Password changed successfully';
          this.snackBar.open(message, 'Close', {
            duration: 3000
          });
          this.route.navigateByUrl("/login");
        },
        error => {
          const errorMessage = error.error?.message || 'Error changing password: ' + error.message;
          this.snackBar.open(errorMessage, 'Close', {
            duration: 3000
          });
        }
      );
    }
  }
}
