import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SideMenuComponent } from './side-menu/side-menu.component';

const importExport = [SideMenuComponent];

@NgModule({
  declarations: [importExport],
  imports: [CommonModule, RouterModule],
  exports: [importExport],
})
export class SharedModule {}
