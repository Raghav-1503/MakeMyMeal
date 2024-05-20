import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NotificationService } from 'src/app/services/notification.service';

interface Notification {
  date: Date;
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

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notifications = this.notificationService.getNotifications();
    this.updatePaginatedNotifications();
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
}
