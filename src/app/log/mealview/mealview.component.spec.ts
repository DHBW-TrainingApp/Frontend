/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MealviewPage } from './mealview.page';

describe('MealviewComponent', () => {
  let component: MealviewPage;
  let fixture: ComponentFixture<MealviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealviewPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
