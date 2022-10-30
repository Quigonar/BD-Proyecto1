import { Component, OnInit } from '@angular/core';
import { WorkersListI } from 'app/models/workerslist.interface';
import { WorkersService } from 'app/services/workers.service';
import { ApiService } from 'app/services/api.service'

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})

export class WorkersComponent implements OnInit {
  public tableData1
  public worker:WorkersListI
  public workerD:string[]

  constructor(public _workersService:WorkersService, private api:ApiService) { }

  public passWorker(index: number) {
    this._workersService.setWorker(this._workersService.getWorkers()[index])
  }

  public elimWorker(index: number) {
    this._workersService.setWorker(this._workersService.getWorkers()[index]);
    this.workerD = this._workersService.getWorker();
    this.worker.ID = this.workerD[3];

    this.api.deleteWorker(this.worker).subscribe(data => {
      console.log(data);
    })
    this.ngOnInit();
  }
  
  ngOnInit() {
    this.api.gTableWorkers().subscribe(data => {
      console.log(data)
      this._workersService.setTable(data);
    });
    this.tableData1 = this._workersService.getTable();
    this.worker = {
      FirstN: '',
      FirstLN: '',
      SecondLN: '',
      ID: '',
      DateAdmission: '',
      DateBirth: '',
      Username: '',
      Age: '',
      Password: '',
      Role: '',
      Salary: ''
    }
  }

}
