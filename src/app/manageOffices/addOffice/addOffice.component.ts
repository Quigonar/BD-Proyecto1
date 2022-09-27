import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WorkersListI } from 'app/models/workerslist.interface';
import { ApiService } from 'app/services/api.service';
import { OfficeListI } from '../../models/officelist.interface'

@Component({
  selector: 'app-addOffice',
  templateUrl: './addOffice.component.html',
  styleUrls: ['./addOffice.component.css']
})
export class AddOfficeComponent implements OnInit {

  office: OfficeListI
  workers: WorkersListI[];

  city = new FormControl();
  canton = new FormControl();
  district = new FormControl();
  name = new FormControl();
  phoneNum = new FormControl();
  opDate = new FormControl();
  manName = new FormControl();
  manLName = new FormControl();
  manInDate = new FormControl();

  constructor(private api:ApiService) { }

  public addOffice() {
    
    this.office.City = this.city.value
    this.office.Canton = this.canton.value
    this.office.District = this.district.value
    this.office.Name = this.name.value
    this.office.PhoneNum = this.phoneNum.value
    this.office.OpeningDate = this.opDate.value
    this.office.ManagerN = this.manName.value
    this.office.ManagerLN = this.manLName.value
    this.office.ManagerInDate = this.manInDate.value

    this.api.addOffice(this.office).subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {
    this.api.gTableWorkers().subscribe(data => {
      console.log(data)
      this.workers = data;
    });

    this.office = {
      Name: '',
      City: '',
      Canton: '',
      District: '',
      PhoneNum: '',
      OpeningDate: '',
      ManagerN: '',
      ManagerLN: '',
      ManagerInDate: ''
    }
  }

}
