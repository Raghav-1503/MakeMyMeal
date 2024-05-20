import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(private dialogRef: MatDialog,private router: Router){}

      openDialog() {
        this.dialogRef.open(BookingFormComponent);
      }
      
      dropdownOpen = false;

      toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      }
    
      changePassword() {
        // Handle change password logic here
        console.log('Change Password clicked');
      }
    
      logout() {
        // Handle logout logic here
        console.log('Logout clicked');
      }



}
