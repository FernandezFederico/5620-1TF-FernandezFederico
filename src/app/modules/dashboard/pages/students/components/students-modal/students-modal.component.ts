import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../interface';

@Component({
  selector: 'app-students-modal',
  templateUrl: './students-modal.component.html',
  styleUrl: './students-modal.component.scss'
})
export class StudentsModalComponent {

  id: number;

  constructor(public dialogRef: MatDialogRef<StudentsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public editingStudent: Student) { 
      this.id = editingStudent.id;
      console.log("se recibe la data: ", editingStudent);
      
    }

}
