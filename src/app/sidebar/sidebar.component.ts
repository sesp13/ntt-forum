import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Inicio',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'Mi Perfil',  icon:'pe-7s-user', class: '' },
    { path: '/match', title: 'Match',  icon:'pe-7s-graph2', class: '' },
    { path: '/company-public-profile', title: 'Perfil de la compañía',  icon:'pe-7s-note2', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  
  isMobileMenu(): boolean {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
