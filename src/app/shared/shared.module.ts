import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';

const importExport = [SideMenuComponent, HeaderComponent];

@NgModule({
  declarations: [importExport],
  imports: [CommonModule, RouterModule],
  exports: [importExport],
})
export class SharedModule {}
