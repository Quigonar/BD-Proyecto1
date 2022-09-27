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
  lastName = new FormControl();
  dateBirth = new FormControl();
  password = new FormControl();
  role = new FormControl();
  salary = new FormControl();
  
  constructor(private _workersService: WorkersService, private api:ApiService) { }

  public editWorker() {
    this.workerE.FirstN = this.firstName.value
    this.workerE.LastN = this.lastName.value
    this.workerE.ID = this.ID.value
    this.workerE.DateAdmission = this.dateAdmission.value
    this.workerE.DateBirth = this.dateBirth.value
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
      LastN: '',
      ID: '',
      DateAdmission: '',
      DateBirth: '',
      Age: '',
      Password: '',
      Role: '',
      Salary: ''
    }
    let worker = this._workersService.getWorker()
    this.firstName.setValue(worker[0]);
    this.lastName.setValue(worker[1]);
    this.ID.setValue(worker[2])
    this.dateAdmission.setValue(worker[3])
    this.dateBirth.setValue(worker[4])
    //this.age.setValue(worker[5])
    this.password.setValue(worker[6])
    this.role.setValue(worker[7])
    this.salary.setValue(worker[8])
  }
}
