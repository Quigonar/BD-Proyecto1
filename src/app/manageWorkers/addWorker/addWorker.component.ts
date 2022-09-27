import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'app/services/api.service';
import { WorkersListI } from 'app/models/workerslist.interface';

@Component({
  selector: 'app-addWorker',
  templateUrl: './addWorker.component.html',
  styleUrls: ['./addWorker.component.css']
})
export class AddWorkerComponent implements OnInit {

  worker: WorkersListI

  dateAdmission = new FormControl();
  ID = new FormControl();
  firstName = new FormControl();
  lastName = new FormControl();
  dateBirth = new FormControl();
  //age = new FormControl();
  password = new FormControl();
  role = new FormControl();
  salary = new FormControl();

  constructor(private api:ApiService) { }

  public addWorker() {
    this.worker.FirstN = this.firstName.value
    this.worker.LastN = this.lastName.value
    this.worker.ID = this.ID.value
    this.worker.DateAdmission = this.dateAdmission.value
    this.worker.DateBirth = this.dateBirth.value
    //this.worker.Age = this.age.value
    this.worker.Password = this.password.value
    this.worker.Role = this.role.value
    this.worker.Salary = this.salary.value

    this.api.addWorker(this.worker).subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {
    this.worker = {
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
  }

}
