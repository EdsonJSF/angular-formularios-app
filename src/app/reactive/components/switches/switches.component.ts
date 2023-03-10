import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss'],
})
export class SwitchesComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    genero: [, Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [, Validators.requiredTrue],
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false,
    });

    this.miFormulario.valueChanges.subscribe(({ condiciones, ...rest }) => {
      this.persona = rest;
    });
  }

  validForm(nameField: string) {
    return (
      this.miFormulario.controls[nameField].errors &&
      this.miFormulario.controls[nameField].touched
    );
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    const formValue = { ...this.miFormulario.value };
    const persona = { ...this.persona };

    console.log('formulario', formValue);
    console.log('persona', persona);

    this.miFormulario.reset({
      ...persona,
      noticaciones: false,
    });
  }
}
