import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/workers', title: 'Manage Workers',  icon:'pe-7s-users', class: '' },
    { path: '/offices', title: 'Manage Offices', icon:'pe-7s-server', class:''},
    { path: '/providers', title: 'Manage Providers', icon:'pe-7s-network', class:''},
    { path: '/products', title: 'Manage Products', icon:'pe-7s-box1', class:''},
    { path: '/services', title: 'Manage Services', icon:'pe-7s-ticket', class:''},
    { path: '/clients', title: 'Manage Clients',  icon:'pe-7s-users', class: '' },
    { path: '/appointments', title: 'Appointments',  icon:'pe-7s-drawer', class: '' },
    { path: '/billing', title: 'Billing',  icon:'pe-7s-note2', class: '' },
];

export const ROUTES2: RouteInfo[] = [
<<<<<<< HEAD
    { path: '/user', title: 'User Info',  icon:'pe-7s-user', class: '' },
=======
    { path: '/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
>>>>>>> 47f06006fa939894438a39225ea0d9bdbdd6238f
    { path: '/appointments', title: 'Appointments',  icon:'pe-7s-drawer', class: '' },
    { path: '/billing', title: 'Billing',  icon:'pe-7s-note2', class: '' },
    { path: '/points', title: 'Points', icon:'pe-7s-shopbag',class:''},
]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(public _userService:UserService) { }

  ngOnInit() {
    if (this._userService.getType()) {
      this.menuItems = ROUTES2.filter(menuItem => menuItem)
    }
    else {
      this.menuItems = ROUTES.filter(menuItem => menuItem)
    }

  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}