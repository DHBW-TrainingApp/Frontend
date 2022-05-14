import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmealPageRoutingModule } from './addmeal-routing.module';

import { AddmealPage } from './addmeal.page';
import { FileSizePipe } from 'src/app/file-size.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddmealPageRoutingModule,
  ],
  declarations: [AddmealPage],
})
export class AddmealPageModule {}
