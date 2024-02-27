import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-students-modal',
  templateUrl: './students-modal.component.html',
  styleUrl: './students-modal.component.scss'
})
export class StudentsModalComponent {

  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StudentsModalComponent>,
    @Inject(MAT_DIALOG_DATA) private editingStudent?: Student,
  ) {
    this.studentForm = this.fb.group({
      firstName: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      lastName: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      email: this.fb.control('', [Validators.required, Validators.email, Validators.minLength(6)]),
      address: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      phone: this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      role: this.fb.control('', Validators.required),
    });

    if (editingStudent) {
      this.studentForm.patchValue(editingStudent);
    }
  }

  onSave(): void {
    if (this.studentForm.valid) {
      this.dialogRef.close(this.studentForm.value);
    } else {
      this.studentForm.markAllAsTouched();
    }
  }

}
