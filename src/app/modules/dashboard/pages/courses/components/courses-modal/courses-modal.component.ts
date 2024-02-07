import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../interface';

@Component({
  selector: 'app-courses-modal',
  templateUrl: './courses-modal.component.html',
  styleUrl: './courses-modal.component.scss'
})
export class CoursesModalComponent {

  courseForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CoursesModalComponent>,
    @Inject(MAT_DIALOG_DATA) private editingCourse?: Course,
  ) {
    
    this.courseForm = this.fb.group({
      courseName: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      startDate: this.fb.control(''),
      endDate: this.fb.control(''),
      profesor: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      group: this.fb.control(''),
    });

    if (editingCourse) {
      this.courseForm.patchValue(editingCourse);
    }
  }

  onSave() {
    this.dialogRef.close(this.courseForm.value)
  }

}
