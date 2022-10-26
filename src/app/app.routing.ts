import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './layouts/login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';

const routes: Routes =[
  { path: '', redirectTo: 'login', pathMatch: 'full'}, 
  { path: '', component:LoginComponent },
    /*children: [{
    path: 'admin', component: AdminLayoutComponent, children: [{
      path: '', loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
    }]},
    { path: 'client', component:ClientLayoutComponent, children: [{
        path: '', loadChildren: () => import('./layouts/client-layout/client-layout.module').then(x => x.ClientLayoutModule)
      }]}]}*/
  { path: '', component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]}

  /*{ path: '', component:ClientLayoutComponent,
    children: [
      {
    path: '',
    loadChildren: () => import('./layouts/client-layout/client-layout.module').then(x => x.ClientLayoutModule)
  }]}*/
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
