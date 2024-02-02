import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './pipes/full-name.pipe';
import { TittleFontSizeDirective } from './directives/tittle-font-size.directive';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    FullNamePipe,
    TittleFontSizeDirective,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    FullNamePipe,
    TittleFontSizeDirective,
    MatProgressSpinnerModule,
  ]
})
export class ShearedModule { }
