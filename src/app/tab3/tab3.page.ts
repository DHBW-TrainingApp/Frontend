import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { ModalController } from '@ionic/angular';
import { SocialPage } from '../shared/social/social.page';

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
  modalDataResponse: any;

  constructor(
    private crudService: CrudService,
    public modalCtrl: ModalController
  ) {}

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

  async getModal(id) {
    const modal = await this.modalCtrl.create({
      component: SocialPage,
      componentProps: {
        name: id,
      },
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        console.log('Modal Sent Data : ' + modalDataResponse.data);
      }
    });

    return await modal.present();
  }
}
