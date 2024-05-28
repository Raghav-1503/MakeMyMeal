// import { Component } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { BookingFormComponent } from '../booking-form/booking-form.component';
// import { NavigationEnd, Router } from '@angular/router';
// import { filter } from 'rxjs';
// import { NotificationComponent } from '../notification/notification.component';
// import { NotificationService } from 'src/app/services/notification.service';
// import { AuthService } from 'src/app/services/signup/auth.service';
// import { StorageService } from 'src/app/services/storage/storage.service';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css'],
// })
// export class NavbarComponent {
//   hideNavbar: boolean = false;
//   hideFooter: boolean = false;
//   notificationCount = 0;
//   sideMenuOpen = false;
//   username: string | null = null;

//   constructor(private dialogRef: MatDialog, private router: Router,public dialog: MatDialog, private notificationService: NotificationService,private authService: AuthService) {}

//   ngOnInit() {
//     this.router.events
//       .pipe(
//         filter(
//           (event): event is NavigationEnd => event instanceof NavigationEnd
//         )
//       )
//       .subscribe((event: NavigationEnd) => {
//         this.checkRoute(event.urlAfterRedirects);
//       });

//       this.notificationService.notificationCount$.subscribe(count => {
//         this.notificationCount = count;
//       });

//       this.username = StorageService.getUsername();
//   }

//   openDialog() {
//     this.dialogRef.open(BookingFormComponent);
//   }

//   dropdownOpen = false;

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   toggleDropdown2(): void {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   changePassword() {
//     // Handle change password logic here
//     console.log('Change Password clicked');
//   }

//   logout(): void {
//     this.authService.logout(); // Call the logout method from AuthService
//     this.router.navigate(['/login']); // Navigate to the login page
//   }

//   checkRoute(url: string) {
//     if (url.includes('changePassword')) {
//       this.hideNavbar = true;
//       this.hideFooter = true;
//     } else {
//       this.hideNavbar = false;
//       this.hideFooter = false;
//     }
//   }

//   //notifications
//   openNotifications(): void {
//     this.dialog.open(NotificationComponent, {
//       width: '800px',
//     });
//   }

//   toggleSideMenu() {
//     this.sideMenuOpen = !this.sideMenuOpen;
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { BookingFormComponent } from '../booking-form/booking-form.component';
// import { NavigationEnd, Router } from '@angular/router';
// import { filter } from 'rxjs';
// import { NotificationComponent } from '../notification/notification.component';
// import { NotificationService } from 'src/app/services/notification.service';
// import { AuthService } from 'src/app/services/signup/auth.service';
// import { StorageService } from 'src/app/services/storage/storage.service';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css'],
// })
// export class NavbarComponent implements OnInit {
//   hideNavbar: boolean = false;
//   hideFooter: boolean = false;
//   notificationCount = 0;
//   sideMenuOpen = false;
//   username: string | null = null;

//   constructor(private dialogRef: MatDialog, private router: Router, public dialog: MatDialog, private notificationService: NotificationService, private authService: AuthService) {}

//   ngOnInit() {
//     this.router.events
//       .pipe(
//         filter(
//           (event): event is NavigationEnd => event instanceof NavigationEnd
//         )
//       )
//       .subscribe((event: NavigationEnd) => {
//         this.checkRoute(event.urlAfterRedirects);
//       });

//     this.notificationService.notificationCount$.subscribe(count => {
//       this.notificationCount = count;
//     });

//     this.username = StorageService.getUsername(); // Retrieve username from storage
//   }

//   openDialog() {
//     this.dialogRef.open(BookingFormComponent);
//   }

//   dropdownOpen = false;

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   toggleDropdown2(): void {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   changePassword() {
//     // Handle change password logic here
//     console.log('Change Password clicked');
//   }

//   logout(): void {
//     this.authService.logout(); // Call the logout method from AuthService
//     this.router.navigate(['/login']); // Navigate to the login page
//   }

//   checkRoute(url: string) {
//     if (url.includes('changePassword')) {
//       this.hideNavbar = true;
//       this.hideFooter = true;
//     } else {
//       this.hideNavbar = false;
//       this.hideFooter = false;
//     }
//   }

//   //notifications
//   openNotifications(): void {
//     this.dialog.open(NotificationComponent, {
//       width: '800px',
//     });
//   }

//   toggleSideMenu() {
//     this.sideMenuOpen = !this.sideMenuOpen;
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { BookingFormComponent } from '../booking-form/booking-form.component';
// import { NavigationEnd, Router } from '@angular/router';
// import { filter } from 'rxjs';
// import { NotificationComponent } from '../notification/notification.component';
// import { NotificationService } from 'src/app/services/notification.service';
// import { AuthService } from 'src/app/services/signup/auth.service';
// import { StorageService } from 'src/app/services/storage/storage.service';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css'],
// })
// export class NavbarComponent implements OnInit {
//   hideNavbar: boolean = false;
//   hideFooter: boolean = false;
//   notificationCount = 0;
//   sideMenuOpen = false;
//   username: string | null = null;

//   constructor(private dialogRef: MatDialog, private router: Router, public dialog: MatDialog, private notificationService: NotificationService, private authService: AuthService) {}

//   ngOnInit() {
//     this.router.events
//       .pipe(
//         filter(
//           (event): event is NavigationEnd => event instanceof NavigationEnd
//         )
//       )
//       .subscribe((event: NavigationEnd) => {
//         this.checkRoute(event.urlAfterRedirects);
//       });

//     this.notificationService.notificationCount$.subscribe(count => {
//       this.notificationCount = count;
//     });

//     this.username = StorageService.getUsername(); // Retrieve username from storage
//     console.log('Username on init:', this.username);
//   }

//   openDialog() {
//     this.dialogRef.open(BookingFormComponent);
//   }

//   dropdownOpen = false;

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   toggleDropdown2(): void {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   changePassword() {
//     // Handle change password logic here
//     console.log('Change Password clicked');
//   }

//   logout(): void {
//     this.authService.logout(); // Call the logout method from AuthService
//     this.router.navigate(['/login']); // Navigate to the login page
//   }

//   checkRoute(url: string) {
//     if (url.includes('ForgotPassword')) {
//       this.hideNavbar = true;
//       this.hideFooter = true;
//     } else {
//       this.hideNavbar = false;
//       this.hideFooter = false;
//     }
//   }

//   //notifications
//   openNotifications(): void {
//     this.dialog.open(NotificationComponent, {
//       width: '800px',
//     });
//   }

//   toggleSideMenu() {
//     this.sideMenuOpen = !this.sideMenuOpen;
//   }
// }


// import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { BookingFormComponent } from '../booking-form/booking-form.component';
// import { NavigationEnd, Router } from '@angular/router';
// import { filter } from 'rxjs/operators';
// import { NotificationComponent } from '../notification/notification.component';
// import { NotificationService } from 'src/app/services/notification.service';
// import { AuthService } from 'src/app/services/signup/auth.service';
// import { StorageService } from 'src/app/services/storage/storage.service';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css'],
// })
// export class NavbarComponent implements OnInit, OnDestroy {
//   hideNavbar: boolean = false;
//   hideFooter: boolean = false;
//   notificationCount = 0;
//   sideMenuOpen = false;
//   username: string | null = null;
//   dropdownOpen = false;

//   constructor(private dialogRef: MatDialog, private router: Router, public dialog: MatDialog, private notificationService: NotificationService, private authService: AuthService) {}

//   ngOnInit() {
//     this.router.events
//       .pipe(
//         filter(
//           (event): event is NavigationEnd => event instanceof NavigationEnd
//         )
//       )
//       .subscribe((event: NavigationEnd) => {
//         this.checkRoute(event.urlAfterRedirects);
//       });

//     this.notificationService.notificationCount$.subscribe(count => {
//       this.notificationCount = count;
//     });

//     this.username = StorageService.getUsername(); // Retrieve username from storage
//     console.log('Username on init:', this.username);

//     // Add global click listener
//     document.addEventListener('click', this.onClickOutside.bind(this));
//   }

//   ngOnDestroy() {
//     // Remove global click listener
//     document.removeEventListener('click', this.onClickOutside.bind(this));
//   }

//   openDialog() {
//     this.dialogRef.open(BookingFormComponent);
//   }

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   onClickOutside(event: Event) {
//     if (this.dropdownOpen && !document.getElementById('username')?.contains(event.target as Node) && !(event.target as HTMLElement).closest('.dropdown-box')) {
//       this.dropdownOpen = false;
//     }
//   }

//   changePasswordAndCloseDropdown() {
//     this.changePassword();
//     this.dropdownOpen = false;
//   }

//   logoutAndCloseDropdown() {
//     this.logout();
//     this.dropdownOpen = false;
//   }

//   changePassword() {
//     // Handle change password logic here
//     console.log('Change Password clicked');
//   }

//   logout(): void {
//     this.authService.logout(); // Call the logout method from AuthService
//     this.router.navigate(['/login']); // Navigate to the login page
//   }

//   checkRoute(url: string) {
//     if (url.includes('ForgotPassword')) {
//       this.hideNavbar = true;
//       this.hideFooter = true;
//     } else {
//       this.hideNavbar = false;
//       this.hideFooter = false;
//     }
//   }

//   // notifications
//   openNotifications(): void {
//     this.dialog.open(NotificationComponent, {
//       width: '800px',
//     });
//   }

//   toggleSideMenu() {
//     this.sideMenuOpen = !this.sideMenuOpen;
//   }
// }

// import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
// import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { BookingFormComponent } from '../booking-form/booking-form.component';
// import { NavigationEnd, Router } from '@angular/router';
// import { filter } from 'rxjs/operators';
// import { NotificationComponent } from '../notification/notification.component';
// import { NotificationService } from 'src/app/services/notification.service';
// import { AuthService } from 'src/app/services/signup/auth.service';
// import { StorageService } from 'src/app/services/storage/storage.service';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css'],
// })
// export class NavbarComponent implements OnInit, OnDestroy {
//   hideNavbar: boolean = false;
//   hideFooter: boolean = false;
//   notificationCount = 0;
//   sideMenuOpen = false;
//   username: string | null = null;
//   dropdownOpen = false;
//   notificationDialogRef: MatDialogRef<NotificationComponent> | null = null;

//   constructor(private dialogRef: MatDialog, private router: Router, public dialog: MatDialog, private notificationService: NotificationService, private authService: AuthService) {}

//   ngOnInit() {
//     this.router.events
//       .pipe(
//         filter(
//           (event): event is NavigationEnd => event instanceof NavigationEnd
//         )
//       )
//       .subscribe((event: NavigationEnd) => {
//         this.checkRoute(event.urlAfterRedirects);
//       });

//     this.notificationService.notificationCount$.subscribe(count => {
//       this.notificationCount = count;
//     });

//     this.username = StorageService.getUsername(); // Retrieve username from storage
//     console.log('Username on init:', this.username);

//     // Add global click listener
//     document.addEventListener('click', this.onClickOutside.bind(this));
//   }

//   ngOnDestroy() {
//     // Remove global click listener
//     document.removeEventListener('click', this.onClickOutside.bind(this));
//   }

//   openDialog() {
//     this.dialogRef.open(BookingFormComponent);
//   }

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//   }

//   onClickOutside(event: Event) {
//     if (this.dropdownOpen && !document.getElementById('username')?.contains(event.target as Node) && !(event.target as HTMLElement).closest('.dropdown-box')) {
//       this.dropdownOpen = false;
//     }

//     if (this.notificationDialogRef && !document.querySelector('.mat-dialog-container')?.contains(event.target as Node) && !(event.target as HTMLElement).closest('.notification-num')) {
//       this.notificationDialogRef.close();
//       this.notificationDialogRef = null;
//     }
//   }

//   toggleNotifications(): void {
//     if (this.notificationDialogRef) {
//       this.notificationDialogRef.close();
//       this.notificationDialogRef = null;
//     } else {
//       this.notificationDialogRef = this.dialog.open(NotificationComponent, {
//         width: '800px',
//       });
//     }
//   }

//   changePasswordAndCloseDropdown() {
//     this.changePassword();
//     this.dropdownOpen = false;
//   }

//   logoutAndCloseDropdown() {
//     this.logout();
//     this.dropdownOpen = false;
//   }

//   changePassword() {
//     // Handle change password logic here
//     console.log('Change Password clicked');
//   }

//   logout(): void {
//     this.authService.logout(); // Call the logout method from AuthService
//     this.router.navigate(['/login']); // Navigate to the login page
//   }

//   checkRoute(url: string) {
//     if (url.includes('ForgotPassword')) {
//       this.hideNavbar = true;
//       this.hideFooter = true;
//     } else {
//       this.hideNavbar = false;
//       this.hideFooter = false;
//     }
//   }

//   // notifications
//   openNotifications(): void {
//     this.dialog.open(NotificationComponent, {
//       width: '800px',
//     });
//   }

//   toggleSideMenu() {
//     this.sideMenuOpen = !this.sideMenuOpen;
//   }
// }
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
      });

    this.notificationService.notificationCount$.subscribe(count => {
      this.notificationCount = count;
    });

    this.username = StorageService.getUsername(); // Retrieve username from storage
    console.log('Username on init:', this.username);

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

  checkRoute(url: string) {
    if (url.includes('ForgotPassword')) {
      this.hideNavbar = true;
      this.hideFooter = true;
    } else {
      this.hideNavbar = false;
      this.hideFooter = false;
    }
  }

  toggleSideMenu() {
    this.sideMenuOpen = !this.sideMenuOpen;
  }
}
