import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChallengeCreatePageRoutingModule } from './challenge-create-routing.module';

import { ChallengeCreatePage } from './challenge-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengeCreatePageRoutingModule
  ],
  declarations: [ChallengeCreatePage]
})
export class ChallengeCreatePageModule {}
