import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationsComponent } from './components/registrations-table/registrations.component';
import { RegistrationsRoutingModule } from './registrations-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { EffectsModule } from '@ngrx/effects';
import { RegistrationsEffects } from './store/registrations.effects';
import { StoreModule } from '@ngrx/store';
import { registrationsFeature } from './store/registrations.reducer';
import { RegistrationsModalComponent } from './components/registrations-modal/registrations-modal.component';



@NgModule({
  declarations: [
    RegistrationsComponent,
    RegistrationsModalComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,    
    RegistrationsRoutingModule,
    StoreModule.forFeature(registrationsFeature),
    EffectsModule.forFeature([RegistrationsEffects])
  ]
})
export class RegistrationsModule { }
