import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealOfTheDayComponent } from './meal-of-the-day.component';

describe('MealOfTheDayComponent', () => {
  let component: MealOfTheDayComponent;
  let fixture: ComponentFixture<MealOfTheDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealOfTheDayComponent]
    });
    fixture = TestBed.createComponent(MealOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
