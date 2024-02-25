import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RegistrationsActions } from '../../store/registrations.actions';
import { selectLoading, selectRegistrations } from '../../store/registrations.selectors';
import { Observable } from 'rxjs';
import { Registrations } from '../../interface';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { RegistrationsService } from '../../../../../../core/services/registrations.service';
import { LoadingService } from '../../../../../../core/services/loading.service';


@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrl: './registrations.component.scss'
})
export class RegistrationsComponent implements OnInit {
  registrations$!: Observable<Registrations[]>;
  isLoading$!: Observable<boolean>;

  displayedColumns: string[] = ['id', 'fullName', 'courseName', 'date', 'actions'];
  dataSource: Registrations[] = [];

  constructor(
    public dialog: MatDialog,
    private store: Store<any>,
    private registrationService: RegistrationsService,
    private loadingService: LoadingService,
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

  onDeleteRegistration(ev: Registrations): void {
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
            this.loadingService.setLoading(true);
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