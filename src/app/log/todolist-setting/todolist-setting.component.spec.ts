import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodolistSettingComponent } from './todolist-setting.component';

describe('TodolistSettingComponent', () => {
  let component: TodolistSettingComponent;
  let fixture: ComponentFixture<TodolistSettingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TodolistSettingComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(TodolistSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
