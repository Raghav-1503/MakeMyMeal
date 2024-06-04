import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { NotificationService } from 'src/app/services/notification/notification.service';

interface Notification {
  dateTime: Date;
  message: string;
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];
  paginatedNotifications: Notification[] = [];
  pageSize = 5;
  currentPage = 1;

  constructor(
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<NotificationComponent>
  ) {}

  ngOnInit(): void {
    this.notificationService.getNotifications().subscribe(data => {
      this.notifications = data.reverse();
      this.updatePaginatedNotifications();
    });
  }

  deleteNotification(notification: Notification): void {
    const index = this.notifications.indexOf(notification);
    if (index >= 0) {
      this.notifications.splice(index, 1);
      this.updatePaginatedNotifications();
      // Call your backend to delete the notification
      // this.notificationService.deleteNotification(notification).subscribe();
    }
  }

  clearAllNotifications(): void {
    this.notifications = [];
    this.updatePaginatedNotifications();
    // Call your backend to delete all notifications
    // this.notificationService.clearAllNotifications().subscribe();
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.updatePaginatedNotifications();
  }

  updatePaginatedNotifications(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.paginatedNotifications = this.notifications.slice(startIndex, startIndex + this.pageSize);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
