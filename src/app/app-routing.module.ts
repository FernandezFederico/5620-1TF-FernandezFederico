import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/components/dashboard.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { NotFoundComponent } from './modules/not-found/components/not-found.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(
      (m) => m.DashboardModule
    ),
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
