import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ValidatorsService } from '../../../shared/validators/validators.service';
import { emailPattern, noPuedeSerStrider, nombrePattern } from 'src/app/shared/validators/validations';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group(
    {
      nombre: [, [Validators.required, Validators.pattern(this.validServ.nombrePattern)]],
      email: [, [Validators.required, Validators.pattern(this.validServ.emailPattern)], [this.emailValidator]],
      username: [, [Validators.required, this.validServ.noPuedeSerStrider]],
      password1: [, [Validators.required, Validators.minLength(6)]],
      password2: [, [Validators.required]],
    },
    { validators: [this.validServ.camposIguales('password1', 'password2')] }
  );

  get emailTypeError(): string {
    if (this.miFormulario.get('email')?.errors?.['required']) {
      return 'El correo es obligatorio';
    } else if (this.miFormulario.get('email')?.errors?.['pattern']) {
      return 'El valor no tiene formato de correo';
    } else if (this.miFormulario.get('email')?.errors?.['emailTomado']) {
      return 'El correo ya fue tomado';
    }
    return "";
  }

  constructor(
    private fb: FormBuilder,
    private validServ: ValidatorsService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Edson Sanchez',
      email: 'edson@edson.com',
      username: 'edson',
      password1: '123456',
      password2: '123456',
    });
  }

  validForm(nameField: string) {
    return (
      this.miFormulario.controls[nameField].errors &&
      this.miFormulario.controls[nameField].touched
    );
  }

  crear() {
    if (this.miFormulario.invalid) {
      console.log('Formulario Invalido');

      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }
}
