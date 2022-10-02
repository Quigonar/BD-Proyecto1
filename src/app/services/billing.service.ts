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
  public factura: string[];


  constructor() { 
    this.tableData = {
      headerRow: [ 'Bill #', 'Appointment #','Client Name', 'Client Last Name','Client ID','License Plate', 'Service','Office','Date/Time','Price','Employee Name','Employee Last Name','Employee ID', 'Extras'],
      dataRows: [['0','0','Marcos','Gonzalez','118320994','ABC-103','Lavado','Cartago','2022-10-02T01:04','33000','Marcos','Gonzalez','118320994','Chips, Coca']]
    }
  }
  
  getTable() {
    return this.tableData
    };

  setTable(invoices:BillListI[]){
    this.tableData.dataRows = []
    for (var invoice of invoices) {
      this.tableData.dataRows.push([invoice.Billnum,invoice.AppointmentN,invoice.ClientN,invoice.ClientLN,invoice.IdCliente,invoice.LicenseP,invoice.Service,invoice.Office,invoice.DateTime,invoice.Price,invoice.EmployeeN,invoice.EmployeeLN,invoice.IdTrabajador,invoice.Extras.toString()]) 
    }
  };

  setFactura(factura: string[]){
    this.factura = factura
  };

  getFactura(){
    return this.factura
  }

  getFacturas(){
    return this.tableData.dataRows
  };

}