import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMealPageRoutingModule } from './update-meal-routing.module';

import { UpdateMealPage } from './update-meal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateMealPageRoutingModule,
  ],
  declarations: [UpdateMealPage],
})
export class UpdateMealPageModule {}
