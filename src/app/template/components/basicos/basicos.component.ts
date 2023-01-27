import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss'],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  nombreInvalido(): boolean {
    return (
      this.miFormulario?.controls['producto']?.invalid &&
      this.miFormulario?.controls['producto']?.touched
    );
  }

  precioInvalido(): boolean {
    return (
      this.miFormulario?.controls['precio']?.invalid &&
      this.miFormulario?.controls['precio']?.touched
    );
  }

  existenciaInvalida(): boolean {
    return (
      this.miFormulario?.controls['existencias']?.invalid &&
      this.miFormulario?.controls['existencias']?.touched
    );
  }

  // guardar(miFormulario: NgForm) {
  guardar() {
    console.log(this.miFormulario.value);
  }
}
