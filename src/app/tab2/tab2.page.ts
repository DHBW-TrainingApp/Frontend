import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  username;
  constructor() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.username = JSON.stringify(user.displayName).slice(1, -1);
    // console.log(JSON.stringify(user.uid));
  }

  ngOnInit() {}
}
