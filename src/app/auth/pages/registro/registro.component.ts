import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  // TODO: Temporal
  nombrePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  noPuedeSerStrider(control: FormControl) {
    const valor = control.value?.trim().toLowerCase();
    if (valor === 'strider') {
      return {
        noStrider: true,
      };
    }
    return null;
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.pattern(this.nombrePattern)]],
    email: [, [Validators.required, Validators.pattern(this.emailPattern)]],
    username: [, [Validators.required, this.noPuedeSerStrider]],
  });
  constructor(private fb: FormBuilder) {}

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
