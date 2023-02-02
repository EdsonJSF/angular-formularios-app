import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicosComponent } from './components/basicos/basicos.component';
import { DinamicosComponent } from './components/dinamicos/dinamicos.component';
import { SwitchesComponent } from './components/switches/switches.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent
  ],
  imports: [CommonModule, ReactiveRoutingModule, SharedModule],
})
export class ReactiveModule {}
