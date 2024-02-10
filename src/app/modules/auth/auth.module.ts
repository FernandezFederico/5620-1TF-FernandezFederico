import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { ShearedModule } from '../sheared/sheared.module';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    ShearedModule,
    AuthRoutingModule,
 
  ],exports: [
    LoginComponent
  ]
})
export class AuthModule { }
