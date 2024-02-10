import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/components/home.component';
import { CoursesComponent } from './pages/courses/components/courses-table/courses.component';
import { StudentsComponent } from './pages/students/components/students-table/students.component';
import { StudentDetailComponent } from './pages/students/pages/student-detail/student-detail.component';
import { CourseDetailComponent } from './pages/courses/pages/course-detail/course-detail.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'students/:id',
    component: StudentDetailComponent,
  },
  {
    path: 'courses/:id',
    component: CourseDetailComponent,
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
