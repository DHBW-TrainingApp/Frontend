import { Component, OnInit, Input } from '@angular/core';
import { InfoPopoverPage } from 'src/app/log/info-popover/info-popover.page';
import { ModalController } from '@ionic/angular';
import { CrudService } from 'src/app/services/crud.service';
import { PopoverController } from '@ionic/angular';
import { TODO } from 'src/app/tab1/tab1.page';
@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage implements OnInit {
  @Input() name: string;
  Tasks: TODO[];
  modalDataResponse: any;

  constructor(
    private crudService: CrudService,
    private popoverController: PopoverController,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.crudService.getTasksSocial(this.name).subscribe((res) => {
      this.Tasks = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as TODO),
        };
      });

      this.Tasks.sort(function (a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

      this.calculateDateSums();
    });
  }

  calculateDateSums() {
    let days = [];
    let date = new Date(this.Tasks[0].date).toDateString();
    let protein = 0;
    let kcal = 0;
    for (let i = 0; i < this.Tasks.length; i++) {
      let element = this.Tasks[i];
      if (element.type === 'meal') {
        if (new Date(element.date).toDateString() == date) {
          if (!isNaN(Number(element.protein))) {
            protein += Number(element.protein);
          }

          if (!isNaN(Number(element.energy))) {
            kcal += Number(element.energy);
          }
        } else {
          days.push({
            date: date,
            type: 'date',
            index: i + days.length,
            energy: kcal.toString(),
            protein: protein.toString(),
          });
          if (!isNaN(Number(element.protein))) {
            protein = Number(element.protein);
          } else {
            protein = 0;
          }

          if (!isNaN(Number(element.energy))) {
            kcal = Number(element.energy);
          } else {
            kcal = 0;
          }
          date = new Date(element.date).toDateString();
        }
      }
    }
    let index = 0;
    days.forEach((element) => {
      this.Tasks.splice(index, 0, element);
      index = element.index + 1;
    });
    console.log(this.Tasks);
  }
}
