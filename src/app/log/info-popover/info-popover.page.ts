import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrudService } from './../../services/crud.service';

@Component({
  selector: 'app-info-popover',
  templateUrl: './info-popover.page.html',
  styleUrls: ['./info-popover.page.scss'],
})
export class InfoPopoverPage implements OnInit {
  @Input() name: string;
  Task = {};

  constructor(
    private modalCtr: ModalController,
    private crudService: CrudService
  ) {}

  ngOnInit() {
    this.crudService.getTask(this.name).subscribe((data) => {
      this.Task = data;
      console.log(this.Task);
    });
  }

  async close() {
    const closeModal: string = 'Modal Closed';
    await this.modalCtr.dismiss(closeModal);
  }
}
