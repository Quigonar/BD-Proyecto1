import { Injectable } from '@angular/core';
import { AppointmentsListI } from '../models/appointmentslist.interface';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Injectable({
  providedIn: 'root'
})

export class CitaService {
  public tableData: TableData;
  public cita: string[];
  public IDNewCita: number;
  public lastindex:number;

  constructor() { 
    this.tableData = {
      headerRow: [ 'Appointment #','Client Name', 'Client Last Name','Client ID','License Plate', 'Service','Office','Date/Time', 'Employee Name', 'Employee Last Name', 'Employee ID'],
      dataRows: [ ['0','Marcos','Gonzalez','118320994','ABC-103','Lavado','Cartago','2022-10-02T01:04', 'Marcos', 'Gonzalez', '118320994'] ]
    }
  }
  
  getTable() {
    return this.tableData
    };
    
  setTable(citas:AppointmentsListI[]){
    this.tableData.dataRows = []
    for (var cita of citas) {
      this.tableData.dataRows.push([cita.AppointmentN,cita.ClientN,cita.ClientLN,cita.ClientID,cita.LicenseP,cita.Service,cita.Office,cita.DateTime]) 
    }
  }
  getCitas(){
    return this.tableData.dataRows
  };
  getCita(){
    return this.cita
  };

  setCita(cita_: string[]){
    this.cita = cita_
  };
}