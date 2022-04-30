import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { CrudService } from 'src/app/services/crud.service';
import { AddmealPage } from './addmeal.page';

describe('AddmealPage', () => {
  let component: AddmealPage;
  let fixture: ComponentFixture<AddmealPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AddmealPage],
      providers: [CrudService],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AddmealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  }); */

  /*   describe('add meal', () => {
    console.log(component.mealForm);
    component.mealForm = component.formBuilder.group({
      title: [''],
      energy: [''],
      carbs: [''],
      fat: [''],
      satFat: [''],
      sugar: [''],
      protein: [''],
    });

    expect(component.mealForm).toBeTruthy();
  }); */
});
