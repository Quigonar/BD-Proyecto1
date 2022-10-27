import { Component, OnInit, Input} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'app/services/api.service';
import { ClientsService } from 'app/services/clients.service';
import { ClientsListI } from 'app/models/clientslist.interface'
import { OfficeListI } from 'app/models/officelist.interface';
import { WorkersListI } from 'app/models/workerslist.interface';
import { OfficeService } from 'app/services/office.service';

@Component({
  selector: 'app-editOffice',
  templateUrl: './editOffice.component.html',
  styleUrls: ['./editOffice.component.css']
})

export class EditOfficeComponent implements OnInit {
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
  id = new FormControl();

  constructor(private _officeService:OfficeService, private api:ApiService) { }

  public editOffice() {
    
    this.office.City = this.city.value
    this.office.Canton = this.canton.value
    this.office.District = this.district.value
    this.office.Name = this.name.value
    this.office.PhoneNum = this.phoneNum.value
    this.office.OpeningDate = this.opDate.value
    this.office.ManagerN = this.manName.value
    this.office.ManagerLN = this.manLName.value
    this.office.ManagerInDate = this.manInDate.value

    this.api.editOfficeAPI(this.office).subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {
    this.api.gTableWorkers().subscribe(data => {
      console.log(data)
      this.workers = data;
    });
    this.office = {
      ID: '',
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
    
    let office = this._officeService.getOffice()
    this.city.setValue(office[1]);
    this.canton.setValue(office[2]);
    this.district.setValue(office[3]);
    this.phoneNum.setValue(office[4]);
    this.opDate.setValue(office[5]);
    this.manName.setValue(office[6]);
    this.manLName.setValue(office[7]);
    this.manInDate.setValue(office[8]);
    this.name.setValue(office[0]);
    this.id.setValue(office[9]);

  }

}