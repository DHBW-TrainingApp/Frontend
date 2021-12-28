import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengeCreatePage } from './challenge-create.page';

const routes: Routes = [
  {
    path: '',
    component: ChallengeCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengeCreatePageRoutingModule {}
