import { Injectable } from '@angular/core';
import { ProviderListI } from 'app/models/providerlist.interface';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Injectable({
  providedIn: 'root'
})

export class ProviderService {
  public tableData: TableData;
  public provider:string[];

  constructor() { 
    this.tableData = {
      headerRow: ['Name', 'ID', 'Address', 'Email', 'Contact'],
      dataRows: [['Germantec CR','1234567890','Curridabat','Germanteccr@gmail.com','?']]
    }
  }
  
  getTable() {
    return this.tableData
  };
  setTable(providers:ProviderListI[]){
    this.tableData.dataRows = []
    for (var provider of providers) {
      this.tableData.dataRows.push([provider.Name,provider.ID,provider.Address,provider.Email,provider.Contact]) 
    }
  };
  getProviders(){
    return this.tableData.dataRows
  };
  getProvider(){
    return this.provider
  };
  setProvider(provider: string[]){
    this.provider = provider
  };
}
