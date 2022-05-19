import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';
export class User {
  $key: string;
  displayName: string;
  photoURL: string;
  uid: string;
}
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  Tasks: User[];

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.crudService.getUsers().subscribe((res) => {
      this.Tasks = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as User),
        };
      });
      console.log(this.Tasks);
    });
  }
}
