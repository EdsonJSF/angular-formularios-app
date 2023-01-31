import { Component, ViewChild } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}
interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss'],
})
export class DinamicosComponent {
  persona: Persona = {
    nombre: 'Edson',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'Metal Gear 2' },
    ],
  };

  guardar() {
    console.log('sad');
  }
  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }
}
