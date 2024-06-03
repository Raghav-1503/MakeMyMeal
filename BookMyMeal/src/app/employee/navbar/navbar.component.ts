import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NotificationComponent } from '../notification/notification.component';
import { NotificationService } from 'src/app/services/notification.service';
import { AuthService } from 'src/app/services/signup/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { BookingFormComponent } from '../booking-form/booking-form.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  hideNavbar: boolean = false;
  hideFooter: boolean = false;
  notificationCount = 0;
  sideMenuOpen = false;
  username: string | null = null;
  dropdownOpen = false;
  notificationDialogRef: MatDialogRef<NotificationComponent> | null = null;

  constructor(private dialogRef: MatDialog, private router: Router, public dialog: MatDialog, private notificationService: NotificationService, private authService: AuthService) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.checkRoute(event.urlAfterRedirects);
        this.closeDropdown(); // Close the dropdown on navigation
      });

    // this.notificationService.notificationCount$.subscribe(count => {
    //   this.notificationCount = count;
    // });

    this.username = StorageService.getUsername(); // Retrieve username from storage
    console.log('Username on init:', this.username);

    document.addEventListener('click', this.onClickOutside.bind(this));
  }

  checkRoute(url: string) {
    if (url.endsWith('changePassword')) {
      this.hideNavbar = true;
      this.hideFooter = true;
    } 
    else {
      this.hideNavbar = false;
      this.hideFooter = false;
    }
  }

  openDialog() {
    this.dialogRef.open(BookingFormComponent);
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleNotifications(event: MouseEvent): void {
    event.stopPropagation(); // Prevent the event from bubbling up

    if (this.notificationDialogRef) {
      this.notificationDialogRef.close();
      this.notificationDialogRef = null;
    } else {
      this.notificationDialogRef = this.dialog.open(NotificationComponent, {
        width: '900px',
      });

      this.notificationDialogRef.afterClosed().subscribe(() => {
        this.notificationDialogRef = null;
      });
    }
  }

  changePasswordAndCloseDropdown() {
    this.changePassword();
    this.dropdownOpen = false;
  }

  logout(): void {
    this.authService.logout(); // Call the logout method from AuthService
    this.router.navigate(['/login']); // Navigate to the login page
  }

  logoutAndCloseDropdown() {
    this.logout();
    this.dropdownOpen = false;
  }

  changePassword() {
    // Handle change password logic here
    console.log('Change Password clicked');
  }

  toggleSideMenu() {
    this.sideMenuOpen = !this.sideMenuOpen;
  }

  closeSideMenu() {
    this.sideMenuOpen = false;
  }
  
  closeDropdown() {
    this.dropdownOpen = false;
  }
  
  closeNotificationDialog() {
    if (this.notificationDialogRef) {
      this.notificationDialogRef.close();
      this.notificationDialogRef = null;
    }
  }
  
  onClickOutside(event: Event) {
    if (this.dropdownOpen && !document.getElementById('username')?.contains(event.target as Node) && !(event.target as HTMLElement).closest('.dropdown-box')) {
      this.closeDropdown();
    }
  
  }

  ngOnDestroy() {
    // Remove global click listener
    document.removeEventListener('click', this.onClickOutside.bind(this));
  }
}

