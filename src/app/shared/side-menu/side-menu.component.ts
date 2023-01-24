import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  path: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  templateMenu: MenuItem[] = [
    {
      title: 'Básicos',
      path: './template/basicos',
    },
    {
      title: 'Dinámicos',
      path: './template/dinamicos',
    },
    {
      title: 'Switches',
      path: './template/switches',
    },
  ];

  reactiveMenu: MenuItem[] = [
    {
      title: 'Básicos',
      path: './reactive/basicos',
    },
    {
      title: 'Dinámicos',
      path: './reactive/dinamicos',
    },
    {
      title: 'Switches',
      path: './reactive/switches',
    },
  ];
}
