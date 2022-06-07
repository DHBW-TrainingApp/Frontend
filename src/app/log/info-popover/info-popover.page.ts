import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrudService } from './../../services/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-info-popover',
  templateUrl: './info-popover.page.html',
  styleUrls: ['./info-popover.page.scss'],
})
export class InfoPopoverPage implements OnInit {
  @Input() name: string;
  Task = {};
  mealForm: FormGroup;

  constructor(
    private modalCtr: ModalController,
    private crudService: CrudService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.crudService.getTask(this.name).subscribe((data) => {
      this.Task = data;
      console.log(this.Task);
      if (data['type'] == 'meal') {
        this.mealForm = this.formBuilder.group({
          title: [data['title']],
          energy: [data['energy']],
          date: [data['date']],
          fat: [data['fat']],
          satFat: [data['satFat']],
          carbs: [data['carbs']],
          sugar: [data['sugar']],
          protein: [data['protein']],
        });
      }

      if (data['type'] == 'activity') {
        this.mealForm = this.formBuilder.group({
          title: [data['title']],
          reps: [data['reps']],
          sets: [data['sets']],

          date: [data['date']],
        });
      }
    });
  }

  async close() {
    const closeModal: string = 'Modal Closed';
    await this.modalCtr.dismiss(closeModal);
  }
}
