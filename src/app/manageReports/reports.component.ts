import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'app/services/api.service';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { ResponseI } from 'app/models/response.interface';
import { UserService } from 'app/services/user.service';
import { NumberSymbol } from '@angular/common';
import { ClientsListI } from 'app/models/clientslist.interface';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  clients:ClientsListI[]

  id = new FormControl();
  
  constructor(private api:ApiService) { }
  
  downloadReport(index:number) { 
    if (index == 1){
      this.api.generateReport1().subscribe(data => {
        console.log(data)
      })
      alert("Reporte de planilla was downloaded succesfully")
    }
    else if (index == 2 && this.id.value != null) {
      this.api.generateReport2(this.id.value).subscribe(data => {
        console.log(data)
      })
      alert("Reporte de tipos de lavado por cliente was downloaded succesfully")
    }
    else if (index == 3) {
      this.api.generateReport3().subscribe(data => {
        console.log(data)
      })
      alert("Reporte de redencion de puntos was downloaded succesfully")
    }
    else { alert("Please fill out the client id box") }
  }

  ngOnInit(){
    this.api.gTableClients().subscribe(data => {
      console.log(data)
      this.clients = data
    })
  }

  
}
