/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActivityviewPage } from './activityview.page';

describe('ActivityviewComponent', () => {
  let component: ActivityviewPage;
  let fixture: ComponentFixture<ActivityviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityviewPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
