import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './shared/authentication-service';

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
      icon: 'home',
    },
    {
      title: 'login',
      url: '/tabs/login',
      icon: 'mail',
    },
    {
      title: 'registration',
      url: '/tabs/registration',
      icon: 'mail',
    },
    {
      title: 'forgot Password',
      url: '/tabs/forgot-password',
      icon: 'mail',
    },
    {
      title: 'settings',
      url: '/tabs/settings',
      icon: 'mail',
    },
    {
      title: 'create',
      url: '/tabs/create',
      icon: 'mail',
    },
    {
      title: 'todo-list',
      url: '/tabs/todo-list',
      icon: 'mail',
    },
    {
      title: 'update-todo',
      url: '/tabs/update-todo',
      icon: 'mail',
    },
    {
      title: 'add-meal',
      url: '/tabs/add-meal',
      icon: 'mail',
    },
    {
      title: 'add-activity',
      url: '/tabs/add-activity',
      icon: 'mail',
    },
  ];

  constructor(public authService: AuthenticationService) {}

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    console.log(path);
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
}
