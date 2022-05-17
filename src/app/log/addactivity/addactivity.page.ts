import { Component, OnInit } from '@angular/core';
import { jsonEval } from '@firebase/util';

import { CrudService } from './../../services/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addactivity',
  templateUrl: './addactivity.page.html',
  styleUrls: ['./addactivity.page.scss'],
})
export class AddactivityPage implements OnInit {
  mealForm: FormGroup;

  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.mealForm = this.formBuilder.group({
      type: 'activity',
      title: [''],
      date: new Date().toISOString(),
      sets: [''],
      reps: [''],
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
