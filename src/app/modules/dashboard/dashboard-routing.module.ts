import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/components/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'courses',
    loadChildren: () => import('./pages/courses/courses.module').then(
      (m) => m.CoursesModule
    ),
  },
  {
    path: 'students',
    loadChildren: () => import('./pages/students/students.module').then(
      (m) => m.StudentsModule
    )
  },
  {
    path: '**',
    redirectTo: 'home',
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
