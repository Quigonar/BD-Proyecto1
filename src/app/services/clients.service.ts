import { Injectable } from '@angular/core';
import { ClientsListI } from '../models/clientslist.interface';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Injectable({
  providedIn: 'root'
})

export class ClientsService {
  public tableData: TableData;
  public client: string[];

  constructor() { 
    this.tableData = {
      headerRow: [ 'Name', 'Last Name','Second Last Name', 'Phone Number', 'ID', 'Email', 'Address', 'Username', 'Password', 'Points' ],
      dataRows: [['Marcos', 'Gonzalez', '85097252', '118320994','quigonar@gmail.com','Residencial Hacienda del Sol', 'quigonar','password', '3300']]
    }
  }
  
  getTable() {
    return this.tableData
  };
  setTable(clients:ClientsListI[]){
    this.tableData.dataRows = []
    for (var client of clients) {
      this.tableData.dataRows.push([client.FirstN,client.FirstLN,client.SecondLN,client.PhoneNum.toString(),client.ID,client.Email,client.Address.toString(),client.Username,client.Password, client.Points]) 
    }
  };
  getClients(){
    return this.tableData.dataRows
  };
  getClient(){
    return this.client
  };
  setClient(cliente: string[]){
    this.client = cliente
  };
}