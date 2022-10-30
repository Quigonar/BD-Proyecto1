import { Injectable } from '@angular/core';
import { WorkersListI } from '../models/workerslist.interface';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Injectable({
  providedIn: 'root'
})

export class WorkersService {
  public tableData: TableData;
  public worker:string[];

  constructor() { 
    this.tableData = {
      headerRow: [ 'First Name', 'First Last Name','Second Last Name', 'ID', 'Date of Admission', 'Date of Birth', 'Age', 'Username','Password', 'Role', 'Type of Salary' ],
      dataRows: [['Marcos','Gonzalez', 'Araya','118320994','2021-09-11','2001-12-22','20','quigonar','password','Lavador','Semanal']]
    }
  }
  
  getTable() {
    return this.tableData
  };
  setTable(workers:WorkersListI[]){
    this.tableData.dataRows = []
    for (var worker of workers) {
      this.tableData.dataRows.push([worker.FirstN,worker.FirstLN,worker.SecondLN,worker.ID,worker.DateAdmission,worker.DateBirth,worker.Age,worker.Username,worker.Password,worker.Role,worker.Salary]) 
    }
  };
  getWorkers(){
    return this.tableData.dataRows
  };
  getWorker(){
    return this.worker
  };
  setWorker(trabaj: string[]){
    this.worker = trabaj
  };
}