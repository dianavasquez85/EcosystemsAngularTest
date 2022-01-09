import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './components/accounts/accounts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: '/dashboard/accounts',
      pathMatch: 'full'
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      {
        path: 'accounts', 
        component: AccountsComponent}
    ]
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
