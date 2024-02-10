import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullNamePipe } from './pipes/full-name.pipe';
import { TittleFontSizeDirective } from './directives/tittle-font-size.directive';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    FullNamePipe,
    TittleFontSizeDirective,

  ],
  imports: [
    CommonModule,
    

  ],
  exports:[
    FullNamePipe,
    TittleFontSizeDirective,
    MatProgressSpinnerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,    
  ]
})
export class ShearedModule { }
