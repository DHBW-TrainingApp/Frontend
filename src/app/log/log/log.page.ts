import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

export class TODO {
  $key: string;
  title: string;
  description: string;
  author: string;
  roles: {};
}

@Component({
  selector: 'app-log',
  templateUrl: './log.page.html',
  styleUrls: ['./log.page.scss'],
})
export class LogPage implements OnInit {
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
