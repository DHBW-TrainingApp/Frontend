import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('../pages/login/login.module').then((m) => m.LoginPageModule),
      },
      {
        path: 'registration',
        loadChildren: () =>
          import('../pages/registration/registration.module').then(
            (m) => m.RegistrationPageModule
          ),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('../pages/forgot-password/forgot-password.module').then(
            (m) => m.ForgotPasswordPageModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../pages/settings/settings.module').then(
            (m) => m.SettingsPageModule
          ),
      },
      {
        path: 'verify-email',
        loadChildren: () =>
          import('../pages/verify-email/verify-email.module').then(
            (m) => m.VerifyEmailPageModule
          ),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('../crud-examples/create/create.module').then(
            (m) => m.CreatePageModule
          ),
      },
      {
        path: 'todo-list',
        loadChildren: () =>
          import('../crud-examples/todo-list/todo-list.module').then(
            (m) => m.TodoListPageModule
          ),
      },
      {
        path: 'update-todo',
        loadChildren: () =>
          import('../crud-examples/update-todo/update-todo.module').then(
            (m) => m.UpdateTodoPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
