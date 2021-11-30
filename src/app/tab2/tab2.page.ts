import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(JSON.stringify(user.uid));
  }

  ngOnInit() {}
}
