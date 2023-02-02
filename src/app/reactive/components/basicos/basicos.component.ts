import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  miFormulario: FormGroup = new FormGroup({
    'nombre': new FormControl('RTX 4080ti')
  })

  constructor() { }

  ngOnInit(): void {
  }

}
