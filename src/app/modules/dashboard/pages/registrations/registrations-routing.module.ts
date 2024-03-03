import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationsComponent } from './components/registrations-table/registrations.component';
import { studentGuard } from '../../../../core/guards/student.guard';

const routes: Routes = [
  {
    path: '',
    component: RegistrationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationsRoutingModule { }
