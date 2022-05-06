import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';

export class TODO {
  $key: string;
  title: string;
  description: string;
  author: string;
  roles: {};
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  Tasks: TODO[];
  constructor(private crudService: CrudService) {}

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

  todoList() {
    this.crudService.getTasks().subscribe((data) => {});
  }

  remove(id) {
    if (window.confirm('Are you sure?')) {
      this.crudService.delete(id);
    }
  }
}
