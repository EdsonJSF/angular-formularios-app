import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss'],
})
export class DinamicosComponent {
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array(
      [['Metal Gear'], ['Death Stranding']],
      Validators.required
    ),
  });

  // Evita el error en el HTML
  public get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

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
    console.log(this.miFormulario.value);
  }
}
