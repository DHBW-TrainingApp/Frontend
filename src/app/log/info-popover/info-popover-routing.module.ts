import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPopoverPage } from './info-popover.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPopoverPageRoutingModule {}
