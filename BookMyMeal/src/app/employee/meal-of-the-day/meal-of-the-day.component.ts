import { Component } from '@angular/core';

@Component({
  selector: 'app-meal-of-the-day',
  templateUrl: './meal-of-the-day.component.html',
  styleUrls: ['./meal-of-the-day.component.css']
})
export class MealOfTheDayComponent {
  lunchMeals: string[] = ['Paneer Chatpata', 'Kobi Mutter', 'Dal Palak', 'Rice', 'Roti'];
  dinnerMeals: string[] = ['Paneer Butter Masala', 'Green Peas Usal', 'Dal Tadka', 'Jeera Rice', 'Roti'];
}
