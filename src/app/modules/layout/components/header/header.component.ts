import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() isSidenavOpen: boolean = false;
  @Output() toggleSidenav = new EventEmitter<void>();

  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }
}


