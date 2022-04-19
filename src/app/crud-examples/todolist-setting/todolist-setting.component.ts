import { Component, OnInit } from '@angular/core';
import { PopoverController, } from '@ionic/angular';


@Component({
  selector: 'app-todolist-setting',
  templateUrl: './todolist-setting.component.html',
  styleUrls: ['./todolist-setting.component.scss'],
})
export class TodolistSettingComponent implements OnInit {

  site;

  constructor(
    private popoverController: PopoverController) { }

  ngOnInit() {
    // this.siteInfo = this.navParams.get('site');
    console.log(this.site);
  }

  wifiSetting() {
    // code for setting wifi option in apps
    this.popoverController.dismiss();
  }

  logout() {
    // code for logout
    this.popoverController.dismiss();
  }

  eventFromPopover() {
    this.popoverController.dismiss('edupala.com');
  }
}
