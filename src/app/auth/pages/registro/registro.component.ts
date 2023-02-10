import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  // TODO: Temporal
  nombrePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.pattern(this.nombrePattern)]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

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
