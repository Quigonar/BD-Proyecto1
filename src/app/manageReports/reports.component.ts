import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'app/services/api.service';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { ResponseI } from 'app/models/response.interface';
import { UserService } from 'app/services/user.service';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  public tableData1: TableData;
  
  constructor() { 
    this.tableData1 = {
      headerRow: [ 'Report Name'],
      dataRows: [['Reporte de planilla'], ['Reporte de tipos de lavado por cliente'], ['Reporte de rendencion de puntos']]
    }
  }
  
  downloadReport(index:number) {
    console.log(index)
  }

  ngOnInit(){
    console.log(this.tableData1)
  }

  
}
