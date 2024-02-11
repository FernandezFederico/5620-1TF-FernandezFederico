import { Component, EventEmitter, Output } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router, private authService: AuthService) {}

  @Output() toggleSidenav = new EventEmitter<void>();
  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }

  onLogOut(): void {
    this.authService.Logout();
  }
}


