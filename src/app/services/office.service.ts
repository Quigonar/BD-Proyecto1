import { Injectable } from '@angular/core';
import { OfficeListI } from '../models/officelist.interface';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
  }

@Injectable({
    providedIn: 'root'
  })

export class OfficeService {
public tableData: TableData;
public office: string[];

constructor() { 
    this.tableData = {
    headerRow: [ 'Name', 'City', 'Canton', 'District', 'Phone Number', 'Opening Date', 'Manager Name', 'Manager Last Name', 'Starting Date of Manager'],
    dataRows: [['DetailTEC', 'Cartago', 'Cartago', 'Dulce Nombre', '22031547', '2019-08-16','Marcos','Gonzalez', '2019-08-18']]
    }
}

getTable() {
    return this.tableData
};
setTable(offices:OfficeListI[]){
    this.tableData.dataRows = []
    for (var office of offices) {
    this.tableData.dataRows.push([office.Name,office.City,office.Canton,office.District,office.PhoneNum,office.OpeningDate,office.ManagerN,office.ManagerLN,office.ManagerInDate]) 
    }
};
getOffices(){
    return this.tableData.dataRows
};
getOffice(){
    return this.office
};
setOffice(office: string[]){
    this.office = office
};
}