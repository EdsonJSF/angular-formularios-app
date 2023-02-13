import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ValidatorsService } from '../../../shared/validators/validators.service';
import { emailPattern, noPuedeSerStrider, nombrePattern } from 'src/app/shared/validators/validations';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.pattern(this.validServ.nombrePattern)]],
    email: [, [Validators.required, Validators.pattern(this.validServ.emailPattern)]],
    username: [, [Validators.required, this.validServ.noPuedeSerStrider]],
  });
  constructor(private fb: FormBuilder, private validServ: ValidatorsService) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Edson Sanchez',
      email: 'edson@edson.com',
      username: 'edson',
    });
  }

  validForm(nameField: string) {
    return (
      this.miFormulario.controls[nameField].errors &&
      this.miFormulario.controls[nameField].touched
    );
  }

  crear() {
    console.log(this.miFormulario.value);

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
  }
}
