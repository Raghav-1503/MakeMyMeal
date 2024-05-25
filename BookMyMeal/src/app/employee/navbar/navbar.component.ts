import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { NotificationComponent } from '../notification/notification.component';
import { NotificationService } from 'src/app/services/notification.service';
import { AuthService } from 'src/app/services/signup/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  hideNavbar: boolean = false;
  hideFooter: boolean = false;
  notificationCount = 0;
  sideMenuOpen = false;

  constructor(private dialogRef: MatDialog, private router: Router,public dialog: MatDialog, private notificationService: NotificationService,private authService: AuthService) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.checkRoute(event.urlAfterRedirects);
      });

      this.notificationService.notificationCount$.subscribe(count => {
        this.notificationCount = count;
      });
  }

  openDialog() {
    this.dialogRef.open(BookingFormComponent);
  }

  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleDropdown2(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  changePassword() {
    // Handle change password logic here
    console.log('Change Password clicked');
  }

  logout(): void {
    this.authService.logout(); // Call the logout method from AuthService
    this.router.navigate(['/login']); // Navigate to the login page
  }

  checkRoute(url: string) {
    if (url.includes('changePassword')) {
      this.hideNavbar = true;
      this.hideFooter = true;
    } else {
      this.hideNavbar = false;
      this.hideFooter = false;
    }
  }

  //notifications
  openNotifications(): void {
    this.dialog.open(NotificationComponent, {
      width: '800px',
    });
  }

  toggleSideMenu() {
    this.sideMenuOpen = !this.sideMenuOpen;
  }
}
