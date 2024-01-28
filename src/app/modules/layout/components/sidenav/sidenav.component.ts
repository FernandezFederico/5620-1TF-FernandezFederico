import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @Input() isOpened: boolean = false;
  @Input() isSidenavOpen: boolean = false;

  toggleSidenav() {
    this.isOpened = !this.isOpened;
  }

}
