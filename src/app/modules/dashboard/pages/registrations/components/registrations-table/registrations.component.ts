import { Component, OnInit, Pipe } from '@angular/core';
import { Store } from '@ngrx/store';
import { RegistrationsActions } from '../../store/registrations.actions';
import { selectLoading, selectRegistrations } from '../../store/registrations.selectors';
import { Observable } from 'rxjs';
import { Registration } from '../../interface';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { RegistrationsService } from '../../../../../../core/services/registrations.service';
import { LoadingService } from '../../../../../../core/services/loading.service';
import { MatButtonModule } from '@angular/material/button';
import { RegistrationsModalComponent } from '../registrations-modal/registrations-modal.component';
@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrl: './registrations.component.scss'
})
export class RegistrationsComponent implements OnInit {
  registrations$!: Observable<Registration[]>;
  isLoading$!: Observable<boolean>;

  displayedColumns: string[] = ['id', 'fullName', 'courseName', 'profesor','actions'];
  dataSource: Registration[] = [];

  constructor(
    private store: Store<any>,
    private registrationService: RegistrationsService,
    private loadingService: LoadingService,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.registrations$ = this.store.select(selectRegistrations);
    this.isLoading$ = this.store.select(selectLoading);
    this.store.dispatch(RegistrationsActions.loadRegistrations());

    this.registrations$.subscribe({
      next: (registrations) => {
        this.dataSource = registrations;
      }
    })
  }

  onCreateRegistration(): void {
    this.dialog.open(RegistrationsModalComponent)
  }

  onEditRegistration(registration: Registration): void {
    this.dialog.open(RegistrationsModalComponent,{
      data: registration,
    }).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.loadingService.setLoading(true);
          this.registrationService.updateRegistrations(registration.id, result).subscribe({
            next: (registrations) => (this.dataSource = registrations),
            complete: () => {
              this.loadingService.setLoading(false);
            }
          })
        }
      }
    })
  }

  onDeleteRegistration(ev: Registration): void {
    Swal.fire({
      title: "Quieres ELIMINAR la inscripción?",
      text: "No podrás revertir los cambios!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar la inscripción",
    }).then((result) => {
      if (result.isConfirmed) {
        this.loadingService.setLoading(true);
        this.registrationService.deleteRegistration(ev.id).subscribe({
          next: (registrations) => {
            this.dataSource = [...registrations]
          },
          complete: () => {
            this.loadingService.setLoading(false);
            Swal.fire({
              title: "BORRADA!",
              text: "Instrucción borrado",
              icon: "success"
            })
          }
        })
      }
    })
    
  }
}