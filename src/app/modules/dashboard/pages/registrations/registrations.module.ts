import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationsRoutingModule } from './registrations-routing.module';
import { RegistrationsComponent } from './components/registrations.component';
import { EffectsModule } from '@ngrx/effects';
import { RegistrationsEffects } from './store/registrations.effects';
import { StoreModule } from '@ngrx/store';
import { registrationsFeature } from './store/registrations.reducer';


@NgModule({
  declarations: [
    RegistrationsComponent
  ],
  imports: [
    CommonModule,
    RegistrationsRoutingModule,
    StoreModule.forFeature(registrationsFeature),
    EffectsModule.forFeature([RegistrationsEffects])
  ]
})
export class RegistrationsModule { }
