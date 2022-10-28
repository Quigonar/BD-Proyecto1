import { Injectable } from '@angular/core';
import { ServiceListI } from 'app/models/servicelist.interface';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  public tableData: TableData;
  public service:string[];

  constructor() { 
    this.tableData = {
      headerRow: [ 'Name', 'Cost', 'Price', 'Estimated Duration (hrs)', 'Products Needed', 'Required Personal', 'Punctuation', 'ID' ],
      dataRows: [['Lavado y aspirado','15500','33000','2 hrs','Jabon, Aspiradora','Lavador','33', '1']]
    }
  }
  
  getTable() {
    return this.tableData
  };
  setTable(services:ServiceListI[]){
    this.tableData.dataRows = []
    for (var service of services) {
      this.tableData.dataRows.push([service.Name,service.Cost,service.Price,service.Duration,service.Products.toString(),service.PersonalReq,service.Punctuation,service.ID]) 
    }
  };
  getServices(){
    return this.tableData.dataRows
  };
  getService(){
    return this.service
  };
  setService(service: string[]){
    this.service = service
  };
}
