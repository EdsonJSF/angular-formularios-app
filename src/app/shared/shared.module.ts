import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';

const importExport = [SideMenuComponent];

@NgModule({
  declarations: [importExport],
  imports: [CommonModule],
  exports: [importExport],
})
export class SharedModule {}
