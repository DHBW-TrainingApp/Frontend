import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  username;
  constructor(private router: Router) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user === null) {
      this.router.navigate(['/slides']);
    }

    if (this.username !== undefined) {
      this.username = JSON.stringify(user.displayName).slice(1, -1);
    }
  }
}
