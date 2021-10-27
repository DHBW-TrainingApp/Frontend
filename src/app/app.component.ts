import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/tabs/tab2',
      icon: 'home'
    },
    {
      title: 'login',
      url: '/tabs/login',
      icon: 'mail'
    },
    {
      title: 'registration',
      url: '/tabs/registration',
      icon: 'mail'
    },
    {
      title: 'forgot Passworf',
      url: '/tabs/forgot-password',
      icon: 'mail'
    }
  ];

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    console.log(path)
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
