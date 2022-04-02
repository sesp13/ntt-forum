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
    { path: '/forum', title: 'Foro',  icon:'pe-7s-chat', class: '' },
    { path: '/match', title: 'Matching',  icon:'pe-7s-graph2', class: '' },
    { path: '/company-public-profile', title: 'Conoce más',  icon:'pe-7s-note2', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
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
