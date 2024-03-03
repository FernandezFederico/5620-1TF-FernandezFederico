import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Student } from '../../../dashboard/pages/students/interface';
import { selectAuthStudent } from '../../../../core/store/auth/selectors/auth.selectors';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  authUser$: Observable< Student | null >

  constructor(
    private router: Router, 
    public authService: AuthService,
    private store: Store,

  ) {
    this.authUser$ = this.store.select(selectAuthStudent)
  }

  @Output() toggleSidenav = new EventEmitter<void>();
  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }

  onLogOut(): void {
    this.authService.Logout();
  }
}


