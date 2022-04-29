import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.page.html',
  styleUrls: ['./bmi.page.scss'],
})
export class BmiPage implements OnInit {
  constructor() {}
  btnVal = 'Calculate';
  bmi = 'Your BMI';
  segmentValue;
  color: string = 'primary';

  ngOnInit() {}

  calculate(height, weight) {
    if (weight.value === '' || height.value === '') {
      window.alert('All values are mandatory');
      return;
    }

    let h: number = height.value;
    let w: number = weight.value;
    let bmiVal = w / Math.pow(h / 100, 2);

    if (this.segmentValue == 'female') {
      if (bmiVal < 19) {
        this.bmi = bmiVal + ' (Underweight)';
        this.color = 'secondary';
      } else if (bmiVal < 24) {
        this.bmi = bmiVal + ' (Normal)';
        this.color = 'success';
      } else if (bmiVal < 30) {
        this.bmi = bmiVal + ' (Overweight)';
        this.color = 'danger';
      } else if (bmiVal < 40) {
        this.bmi = bmiVal + ' (Adipositas)';
        this.color = 'danger';
      } else {
        this.bmi = bmiVal + ' (Strong Adipositas)';
        this.color = 'danger';
      }
    } else {
      if (bmiVal < 20) {
        this.bmi = bmiVal + ' (Underweight)';
        this.color = 'secondary';
      } else if (bmiVal < 25) {
        this.bmi = bmiVal + ' (Normal)';
        this.color = 'success';
      } else if (bmiVal < 30) {
        this.bmi = bmiVal + ' (Overweight)';
        this.color = 'danger';
      } else if (bmiVal < 40) {
        this.bmi = bmiVal + ' (Adipositas)';
        this.color = 'danger';
      } else {
        this.bmi = bmiVal + ' (Strong Adipositas)';
        this.color = 'danger';
      }
    }
  }

  segmentChanged(e) {
    console.log(e.detail.value);
    this.segmentValue = e.detail.value;
    console.log(this.segmentValue);
  }
}
