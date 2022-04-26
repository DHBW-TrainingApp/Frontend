import { Component, OnInit } from '@angular/core';
import { jsonEval } from '@firebase/util';

import { CrudService } from './../../services/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-addmeal',
  templateUrl: './addmeal.page.html',
  styleUrls: ['./addmeal.page.scss'],
})
export class AddmealPage implements OnInit {
  mealForm: FormGroup;
  filledForm: boolean = true;
  bProtein: boolean = true;
  bSugar: boolean = true;
  bSatFat: boolean = true;
  bFat: boolean = true;
  bCarbs: boolean = true;
  bEnergy: boolean = true;
  bTitle: boolean = true;


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
    //let data = stringify(this.mealForm.value);
    //let protein = this.mealForm.get('protein').value;
    //console.log("protein wert ist: " + protein);
    console.log("onSubmit() begin  checking all fields whether 'null'");

    if( this.mealForm.get('title').value == '') {
      this.bTitle = false;
    }      console.log("title: " + this.bTitle);

    if(this.mealForm.get('energy').value == '') {
      this.bEnergy = false;
    }      console.log("energy: " + this.bEnergy);

    if( this.mealForm.get('carbs').value == '') {
      this.bCarbs = false;
    }      console.log("carbs: " + this.bCarbs);

    if( this.mealForm.get('fat').value == '') {
      this.bFat = false;
    }      console.log("fat: " + this.bFat);

    if( this.mealForm.get('satFat').value == '') {
      this.bSatFat = false;
    }      console.log("satFat: " + this.bSatFat);

    if( this.mealForm.get('sugar').value == '') {
      this.bSugar = false;
    }      console.log("sugar: " + this.bSugar);

    if( this.mealForm.get('protein').value == '') {
      this.bProtein = false;
    }      console.log("protein: " + this.bProtein);

    console.log("protein wert ist: " + this.mealForm.get('protein').value);

    //-----------------------------------------------------------------
    console.log("if one of the fields is null, filledForm should be false: ");
    if(!this.bTitle || !this.bEnergy || !this.bCarbs|| !this.bFat || !this.bSatFat || !this.bSugar || !this.bProtein){
          this.filledForm = false;
    } else {
      this.filledForm = true;
    }
    console.log("filledForm is: " + this.filledForm);

    if(this.filledForm == false){
      return false;

    /* if (!this.mealForm.valid) {
       return false;*/
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
      console.log("onSubmit() ende");
  }

  /*   onSubmit() {
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
    } */
}
