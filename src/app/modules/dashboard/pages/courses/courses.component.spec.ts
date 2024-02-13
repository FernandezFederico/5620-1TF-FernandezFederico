import { CoursesComponent } from './components/courses-table/courses.component';
import { TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { CoursesService } from '../../../../core/services/courses.service';


describe('Pruebas CoursesComponent', () => {

  let component: CoursesComponent;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      providers: [
        MockProvider(CoursesService),
      ]
    });

    component = TestBed.createComponent(CoursesComponent).componentInstance;

  })

  it(' CoursesComponent debe instanciarse correctamente', () => {
    expect(component).toBeTruthy();
  })

  it(' Las columnas (displayedColumns) deben tener los siguientes valores: "id", "courseName", "startDate", "endDate", "actions" ', () => {
    expect(component.displayedColumns).toEqual(['id', 'courseName', 'startDate', 'endDate', 'profesor', 'group', 'actions']);
  })
})