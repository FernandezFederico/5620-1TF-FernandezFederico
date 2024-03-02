import { Component, Inject, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { RegistrationsActions } from '../../store/registrations.actions';
import { Observable } from 'rxjs';
import { Student } from '../../../students/interface';
import { selectCourses, selectStudents } from '../../store/registrations.selectors';
import { Course } from '../../../courses/interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Registration } from '../../interface';


@Component({
  selector: 'app-registrations-modal',
  templateUrl: './registrations-modal.component.html',
  styleUrl: './registrations-modal.component.scss'
})
export class RegistrationsModalComponent {
  students$: Observable<Student[]>
  courses$: Observable<Course[]>
  registrationsForm: FormGroup;

  constructor(private store: Store,
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<RegistrationsModalComponent>,
    @Inject(MAT_DIALOG_DATA) private editingRegistration?: Registration,
  ) {
    this.store.dispatch(RegistrationsActions.loadStudents());
    this.store.dispatch(RegistrationsActions.loadCourses());

    this.students$ = this.store.select(selectStudents);
    this.courses$ = this.store.select(selectCourses);

    this.registrationsForm = this.formBuilder.group({
      studentId: this.formBuilder.control('', Validators.required),
      courseId: this.formBuilder.control('', Validators.required),
    });
    if (editingRegistration) {
      this.registrationsForm.patchValue(editingRegistration);

    }
  }

  onSubmit(): void {
    if (this.registrationsForm.invalid) {
      this.registrationsForm.markAllAsTouched();
    } else {
      this.store.dispatch(RegistrationsActions.createRegistration({ data: this.registrationsForm.value }));
    };
    this.matDialogRef.close();
  }
}
