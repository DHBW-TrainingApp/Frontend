import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BmiPage } from './bmi.page';

describe('BmiPage', () => {
  let component: BmiPage;
  let fixture: ComponentFixture<BmiPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BmiPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(BmiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate correct bmi', () => {
    let mockHeight = { value: 179 };
    let mockWeight = { value: 72 };
    component.calculate(mockHeight, mockWeight);
    expect(component.bmi).toEqual('22.47120876377142 (Normal)');
  });
});
