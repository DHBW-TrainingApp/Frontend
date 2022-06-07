import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateMealPage } from './update-meal.page';

describe('UpdateMealPage', () => {
  let component: UpdateMealPage;
  let fixture: ComponentFixture<UpdateMealPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMealPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateMealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /*  it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
