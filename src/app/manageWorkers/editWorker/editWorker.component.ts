import { Component, OnInit, Input} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'app/services/api.service';
import { WorkersListI } from 'app/models/workerslist.interface';
import { WorkersService } from 'app/services/workers.service';

@Component({
  selector: 'app-editWorker',
  templateUrl: './editWorker.component.html',
  styleUrls: ['./editWorker.component.css']
})

export class EditWorkerComponent implements OnInit {
  public workersData
  workerE: WorkersListI
  dateAdmission = new FormControl();
  ID = new FormControl();
  firstName = new FormControl();
  firstLN = new FormControl();
  secondLN = new FormControl();
  dateBirth = new FormControl();
  //age = new FormControl();
  password = new FormControl();
  role = new FormControl();
  salary = new FormControl();
  username = new FormControl();
  
  constructor(private _workersService: WorkersService, private api:ApiService) { }

  public editWorker() {
    this.workerE.FirstN = this.firstName.value
    this.workerE.FirstLN = this.firstLN.value
    this.workerE.SecondLN = this.secondLN.value
    this.workerE.ID = this.ID.value
    this.workerE.DateAdmission = this.dateAdmission.value
    this.workerE.DateBirth = this.dateBirth.value
    this.workerE.Username = this.username.value
    this.workerE.Password = this.password.value
    this.workerE.Role = this.role.value
    this.workerE.Salary = this.salary.value

    this.api.editWorkerAPI(this.workerE).subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {
    this.workerE = {
      FirstN: '',
      FirstLN: '',
      SecondLN: '',
      ID: '',
      DateAdmission: '',
      DateBirth: '',
      Age: '',
      Username: '',
      Password: '',
      Role: '',
      Salary: ''
    }
    let worker = this._workersService.getWorker()
    this.firstName.setValue(worker[0]);
    this.firstLN.setValue(worker[1]);
    this.secondLN.setValue(worker[2])
    this.ID.setValue(worker[3])
    this.dateAdmission.setValue(worker[4])
    this.dateBirth.setValue(worker[5])
    this.username.setValue(worker[7])
    this.password.setValue(worker[8])
    this.role.setValue(worker[9])
    this.salary.setValue(worker[10])

    this.ID.disable();
  }
}
