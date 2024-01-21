import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './pipes/full-name.pipe';
import { TittleFontSizeDirective } from './directives/tittle-font-size.directive';




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
  ]
})
export class ShearedModule { }
