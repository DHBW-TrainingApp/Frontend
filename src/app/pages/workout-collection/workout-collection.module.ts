import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutCollectionPageRoutingModule } from './workout-collection-routing.module';

import { WorkoutCollectionPage } from './workout-collection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutCollectionPageRoutingModule
  ],
  declarations: [WorkoutCollectionPage]
})
export class WorkoutCollectionPageModule {}
