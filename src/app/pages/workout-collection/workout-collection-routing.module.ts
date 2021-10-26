import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutCollectionPage } from './workout-collection.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutCollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutCollectionPageRoutingModule {}
