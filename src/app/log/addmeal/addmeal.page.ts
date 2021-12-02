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

  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.mealForm = this.formBuilder.group({
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
    if (!this.mealForm.valid) {
      return false;
    } else {
      this.crudService
        .createMeal(this.mealForm.value)
        .then(() => {
          this.mealForm.reset();
          this.router.navigate(['/todo-list']);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
