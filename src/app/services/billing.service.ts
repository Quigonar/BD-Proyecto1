import { Injectable } from '@angular/core';
import { BillListI } from '../models/billlist.interface';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Injectable({
  providedIn: 'root'
})

export class BillingService {
  public tableData: TableData;
  public Facturas: string[];


  constructor() { 
    this.tableData = {
      headerRow: [ 'Bill #', 'Appointment #','Client Name', 'Client Surname','Client ID','License Plate', 'Service','Office','Date/Time','Price','Employee Name','Employee Surname','Employee ID'],
      dataRows: []
    }
  }
  
  getTable() {
    return this.tableData
    };
  setTable(invoices:BillListI[]){
    this.tableData.dataRows = []
    for (var invoice of invoices) {
      this.tableData.dataRows.push([invoice.Billnum,invoice.AppointmentN,invoice.ClientN,invoice.ClientLN,invoice.IdCliente,invoice.LicenseP,invoice.Service,invoice.Office,invoice.DateTime,invoice.Price,invoice.EmployeeN,invoice.EmployeeLN,invoice.IdTrabajador]) 
    }
  };
  getFactura(){
    return this.tableData.dataRows
  };
  appendFacturas(Nuevacita:string[]){
    this.tableData.dataRows.push(Nuevacita);
  }

}