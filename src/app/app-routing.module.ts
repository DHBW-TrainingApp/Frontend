import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./pages/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./crud-examples/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'todo-list',
    loadChildren: () => import('./crud-examples/todo-list/todo-list.module').then( m => m.TodoListPageModule)
  },
  {
    path: 'update-todo',
    loadChildren: () => import('./crud-examples/update-todo/update-todo.module').then( m => m.UpdateTodoPageModule)
  },
  {
    path: 'add-meal',
    loadChildren: () => import('./log/addmeal/addmeal.module').then( m => m.AddmealPageModule)
  },
  {
    path: 'add-activity',
    loadChildren: () => import('./log/addactivity/addactivity.module').then( m => m.AddactivityPageModule)
  },
  {
    path: 'log',
    loadChildren: () => import('./log/log/log.module').then( m => m.LogPageModule)
  },  {
    path: 'challenge',
    loadChildren: () => import('./log/challenge/challenge.module').then( m => m.ChallengePageModule)
  },
  {
    path: 'challenge-create',
    loadChildren: () => import('./crud-examples/challenge-create/challenge-create.module').then( m => m.ChallengeCreatePageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
