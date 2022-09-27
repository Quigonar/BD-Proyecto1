import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    /*{ path: '/home', title: 'Home Screen',  icon: 'pe-7s-home', class: '' },
    { path: '/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },*/
    
    { path: '/workers', title: 'Manage Workers',  icon:'pe-7s-users', class: '' },
    { path: '/offices', title: 'Manage Offices', icon:'pe-7s-server', class:''},
    { path: '/providers', title: 'Manage Providers', icon:'pe-7s-network', class:''},
    { path: '/products', title: 'Manage Products', icon:'pe-7s-box1', class:''},
    { path: '/services', title: 'Manage Services', icon:'pe-7s-ticket', class:''},
    { path: '/clients', title: 'Manage Clients',  icon:'pe-7s-users', class: '' },
    { path: '/appointments', title: 'Appointments',  icon:'pe-7s-drawer', class: '' },
    { path: '/billing', title: 'Billing',  icon:'pe-7s-note2', class: '' },
    /*{ path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },*/
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
