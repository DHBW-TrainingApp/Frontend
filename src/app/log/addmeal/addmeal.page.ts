import { Component, OnInit } from '@angular/core';
import { jsonEval } from '@firebase/util';

import { CrudService } from './../../services/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmeal',
  templateUrl: './addmeal.page.html',
  styleUrls: ['./addmeal.page.scss'],
})
export class AddmealPage implements OnInit {
  mealForm: FormGroup;
  theDate = "".substring(0,10);



  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.mealForm = this.formBuilder.group({
      date: this.theDate,
      type: 'meal',
      title: [''],
      energy: [''],
      carbs: [''],
      fat: [''],
      satFat: [''],
      sugar: [''],
      protein: [''],
    });
  }

  onSubmit() {
    console.log("start of onsubmit in addmeal");
    console.log("Date: " + this.mealForm.get('date').value.substring(0,10));
    this.theDate = this.mealForm.get('date').value.substring(0,10);
    if (!this.mealForm.valid) {
      window.alert('Input all fields');
      return false;
    } else {
      this.crudService
        .createMeal(this.mealForm.value)
        .then(() => {
          this.mealForm.reset();
          this.router.navigate(['/tabs/tab1']);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
