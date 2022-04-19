import { TodolistSettingComponent } from './../todolist-setting/todolist-setting.component';
import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../services/crud.service';
import { PopoverController } from '@ionic/angular';




//import { MatIconModule } from '@angular/material/icon';

//import { MatButtonModule } from '@angular/material/button';


export class TODO {
  $key: string;
  title: string;
  description: string;
  author: string;
  roles: {};
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {
  Tasks: TODO[];

  constructor(private crudService: CrudService, private popoverController: PopoverController) {}

  ngOnInit() {
    this.crudService.getTasks().subscribe((res) => {
      this.Tasks = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as TODO),
        };
      });
    });
  }


  async settingsPopover(ev: any) {
    const siteInfo = { id: 1, name: 'edupala' };
    const popover = await this.popoverController.create({
      component: TodolistSettingComponent,
      event: ev,
      cssClass: 'popover_setting',
      componentProps: {
        site: siteInfo
      },
      translucent: true
    });

    popover.onDidDismiss().then((result) => {
      console.log(result.data);
    });

    return await popover.present();
    /** Sync event from popover component */

  }



  edit(){
    console.log("Ich bin ein Dummy");
  }


  todoList() {
    this.crudService.getTasks().subscribe((data) => {});
  }

  remove(id) {
    if (window.confirm('Are you sure?')) {
      this.crudService.delete(id);
    }
  }
}
