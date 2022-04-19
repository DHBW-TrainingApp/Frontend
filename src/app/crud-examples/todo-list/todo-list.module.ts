import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoListPageRoutingModule } from './todo-list-routing.module';

import { TodoListPage } from './todo-list.page';

//import { MatIconModule } from '@angular/material/icon';

//import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoListPageRoutingModule
  ],
  declarations: [TodoListPage]
})
export class TodoListPageModule {}
