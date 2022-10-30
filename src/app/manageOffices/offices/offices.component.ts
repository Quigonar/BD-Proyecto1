import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { OfficeService } from 'app/services/office.service';
import { OfficeListI } from 'app/models/officelist.interface';



@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css']
})

export class OfficesComponent implements OnInit {
  public tableData1
  public officeD:string[]
  public office:OfficeListI

  constructor(private _officeService:OfficeService, private api:ApiService) { }

  public passOffice(index: number) {
    this._officeService.setOffice(this._officeService.getOffices()[index]);
  }

  public elimOffice(index: number) {
    this._officeService.setOffice(this._officeService.getOffices()[index]);
    this.officeD = this._officeService.getOffice();
    this.office.ID = this.officeD[9];

    this.api.deleteOffice(this.office).subscribe(data => {
      console.log(data);
    })
    this.ngOnInit();
  }
  
  ngOnInit() {
    this.api.gTableOffices().subscribe(data => {
      console.log(data)
      this._officeService.setTable(data)
    });
    this.tableData1 = this._officeService.getTable();
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
      ManagerID: '',
      ManagerInDate: '',
    }
  }

}
