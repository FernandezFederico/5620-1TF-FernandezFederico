import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Student } from '../../interface';

@Component({
  selector: 'app-students-modal',
  templateUrl: './students-modal.component.html',
  styleUrl: './students-modal.component.scss'
})
export class StudentsModalComponent {
  id: number;

  constructor(public dialogRef: MatDialogRef<StudentsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student) { 
      this.id = data.id;
      console.log("se recibe la data: ", data);
      
    }

}
