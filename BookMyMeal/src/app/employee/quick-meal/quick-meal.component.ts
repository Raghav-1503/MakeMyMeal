// import { Component, EventEmitter, Input, Output } from '@angular/core';

// @Component({
//   selector: 'app-quick-meal',
//   templateUrl: './quick-meal.component.html',
//   styleUrls: ['./quick-meal.component.css']
// })
// export class QuickMealComponent {
//   @Input() isVisible: boolean = false;
//   @Output() close = new EventEmitter<void>();

//   closePopup(): void {
//     this.close.emit();
//   }
// }


// import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-quick-meal',
//   templateUrl: './quick-meal.component.html',
//   styleUrls: ['./quick-meal.component.css']
// })
// export class QuickMealComponent implements OnInit {
//   @Output() close = new EventEmitter<void>();
//   isVisible: boolean = false;
//   tomorrowDate: string | undefined;

//   ngOnInit(): void {
//     const today = new Date();
//     const tomorrow = new Date(today);
//     tomorrow.setDate(today.getDate() + 1);
//     this.tomorrowDate = tomorrow.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
//   }

//   openPopup(event: Event): void {
//     this.isVisible = true;
//   }

//   closePopup(): void {
//     this.isVisible = false;
//     this.close.emit();
//   }

//   bookMeal(): void {
//     // Logic for booking a meal goes here
//     console.log('Meal booked');
//     this.closePopup();
//   }
// }

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quick-meal',
  templateUrl: './quick-meal.component.html',
  styleUrls: ['./quick-meal.component.css']
})
export class QuickMealComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  isVisible: boolean = false;
  tomorrowDate: string | undefined;

  ngOnInit(): void {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const dayOfWeek = tomorrow.getDay();
    if (dayOfWeek === 6) { // If tomorrow is Saturday
      tomorrow.setDate(tomorrow.getDate() + 2); // Move to Monday
    } else if (dayOfWeek === 0) { // If tomorrow is Sunday
      tomorrow.setDate(tomorrow.getDate() + 1); // Move to Monday
    }

    this.tomorrowDate = tomorrow.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  openPopup(event: Event): void {
    this.isVisible = true;
  }

  closePopup(): void {
    this.isVisible = false;
    this.close.emit();
  }

  bookMeal(): void {
    // Logic for booking a meal goes here
    console.log('Meal booked');
    this.closePopup();
  }
}

