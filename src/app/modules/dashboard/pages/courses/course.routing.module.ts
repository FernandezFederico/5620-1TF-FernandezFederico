import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./components/courses-table/courses.component";
import { CourseDetailComponent } from "./pages/course-detail/course-detail.component";

const routes: Routes = [
	{
		path: '',
		component: CoursesComponent,
	},
	{
		path: ':id',
		component: CourseDetailComponent,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CourseRoutingModule { }