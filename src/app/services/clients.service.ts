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
      headerRow: [ 'First Name', 'Last Name', 'Phone Number', 'ID', 'Email', 'Address', 'City', 'Country', 'Username', 'Password', 'Points' ],
      dataRows: [['Marcos', 'Gonzalez', '85097252', '118320994','quigonar@gmail.com','Residencial Hacienda del Sol', 'San Jose', 'Costa Rica', 'quigonar','password', '3300']]
    }
  }
  
  getTable() {
    return this.tableData
  };
  setTable(clients:ClientsListI[]){
    this.tableData.dataRows = []
    for (var client of clients) {
      this.tableData.dataRows.push([client.FirstN,client.LastN,client.PhoneNum,client.ID,client.Email,client.Address,client.City,client.Country,client.Username,client.Password, client.Points]) 
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