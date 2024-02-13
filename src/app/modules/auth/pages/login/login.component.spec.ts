import { LoginComponent } from './login.component';
import { TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { AuthService } from '../../../../core/services/auth.service';
import { SharedModule } from '../../../shared/shared.module';
import { Validators } from '@angular/forms';

describe('Pruebas LoginComponent', () => {
  let component: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [SharedModule,],
      providers: [
        MockProvider(AuthService),
      ]
    });

    component = TestBed.createComponent(LoginComponent).componentInstance;

  })

  it('LoginComponent debe instanciarse correctamente', () => {
    expect(component).toBeTruthy();
  })

  it('Email y contraseña deben ser requeridos', () => {
    expect(component.loginForm.get('email')?.hasValidator(Validators.required)).toBeTruthy();
    expect(component.loginForm.get('password')?.hasValidator(Validators.required)).toBeTruthy();
  })

  it('Email y contraseña deben ser validos', () => {
    expect(component.loginForm.get('email')?.hasValidator(Validators.email)).toBeTruthy();
  })

  it('si el formulario es invalido, debe mostrar untouched', () => {
    component.loginForm.patchValue({
      email: '',
      password: ''
    })

    expect(component.loginForm.invalid).toBeTruthy();

    const spyOnMarkAsTouched = spyOn(component.loginForm, 'markAllAsTouched');

    component.onLoginSubmit();

    expect(spyOnMarkAsTouched).toHaveBeenCalled();
  })

  it('El password debe tener entre 6 y 12 caracteres', () => {
    const passwordControl = component.loginForm.get('password');

    passwordControl?.setValue('1'.repeat(6)); // 13 characters
    expect(passwordControl?.valid).toBeTruthy();
    passwordControl?.setValue('1'.repeat(12)); // 13 characters
    expect(passwordControl?.valid).toBeTruthy();
    passwordControl?.setValue('1'.repeat(13)); // 13 characters
    expect(passwordControl?.valid).toBeFalse();


  });

})