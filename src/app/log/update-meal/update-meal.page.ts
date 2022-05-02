import { Component, OnInit } from '@angular/core';

import { CrudService } from './../../services/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-meal',
  templateUrl: './update-meal.page.html',
  styleUrls: ['./update-meal.page.scss'],
})
export class UpdateMealPage implements OnInit {
  mealForm: FormGroup;
  id: any;

  constructor(
    private crudService: CrudService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.getTask(this.id).subscribe((data) => {
      console.log(data);

      this.mealForm = this.formBuilder.group({
        title: [data['title']],
        energy: [data['energy']],
        fat: [data['fat']],
        satFat: [data['satFat']],
        carbs: [data['carbs']],
        sugar: [data['sugar']],
        protein: [data['protein']],
      });
    });
  }

  ngOnInit() {
    this.mealForm = this.formBuilder.group({
      title: [''],
      energy: [''],
      fat: [''],
      satFat: [''],
      carbs: [''],
      sugar: [''],
      protein: [''],
    });
  }

  onSubmit() {
    this.crudService.updateMeal(this.id, this.mealForm.value);
  }
}
