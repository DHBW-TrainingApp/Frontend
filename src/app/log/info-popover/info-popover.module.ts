import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPopoverPageRoutingModule } from './info-popover-routing.module';

import { InfoPopoverPage } from './info-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPopoverPageRoutingModule
  ],
  declarations: [InfoPopoverPage]
})
export class InfoPopoverPageModule {}
