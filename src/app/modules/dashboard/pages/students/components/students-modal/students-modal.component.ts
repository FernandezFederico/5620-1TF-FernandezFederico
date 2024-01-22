import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-students-modal',
  templateUrl: './students-modal.component.html',
  styleUrl: './students-modal.component.scss'
})
export class StudentsModalComponent {
  @Input()
  visible = false;

  @Output()
  visibleChange = new EventEmitter();
}
