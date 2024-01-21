import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrl: './students-form.component.scss'
})
export class StudentsFormComponent {
  @Output() studentSubmit = new EventEmitter();

  studentForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      firstName: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      lastName: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      email: this.fb.control('', [Validators.required, Validators.email, Validators.minLength(2)]),
      address: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      phone: this.fb.control('', [Validators.required, Validators.minLength(7), Validators.pattern('^[0-9]*$')]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      role: this.fb.control('', [Validators.required, Validators.minLength(2)]),
    });

  }

  onStudentSubmit():void {
    console.log(this.studentForm.value);
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
    }else {
      this.studentSubmit.emit(this.studentForm.value);
      this.studentForm.reset();
    }
    
  }
}
