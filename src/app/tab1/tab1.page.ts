import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { TodolistSettingComponent } from './../log/todolist-setting/todolist-setting.component';
import { PopoverController } from '@ionic/angular';

export class TODO {
  $key: string;
  title: string;
  description: string;
  author: string;
  roles: {};
  date: string;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  Tasks: TODO[];
  constructor(
    private crudService: CrudService,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
    this.crudService.getTasks().subscribe((res) => {
      this.Tasks = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as TODO),
        };
      });

      this.Tasks.sort(function (a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
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
        site: siteInfo,
      },
      translucent: true,
    });

    popover.onDidDismiss().then((result) => {
      console.log(result.data);
    });

    return await popover.present();
    /** Sync event from popover component */
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
