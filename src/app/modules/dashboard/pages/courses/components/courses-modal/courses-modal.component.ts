import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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
  ) {

    this.courseForm = this.fb.group({
      courseName: this.fb.control(''),
      startDate: this.fb.control(''),
      endDate: this.fb.control(''),
      profesor: this.fb.control(''),
      group: this.fb.control(''),
    })
  }

  onSave(){
    this.dialogRef.close(this.courseForm.value)
  }

}
