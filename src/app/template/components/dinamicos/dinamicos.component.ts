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
  nuevoJuego: string = '';
  persona: Persona = {
    nombre: 'Edson',
    favoritos: [],
  };

  guardar() {
    console.log('sad');
  }

  agregar() {
    if (!this.nuevoJuego) return;

    const nuevoJuego: Favorito = {
      id: this.persona.favoritos.at(-1)
        ? this.persona.favoritos.at(-1)!.id + 1
        : 1,
      nombre: this.nuevoJuego,
    };
    this.persona.favoritos.push({ ...nuevoJuego });

    this.nuevoJuego = '';
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }
}
