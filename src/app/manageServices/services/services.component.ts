import { Component, OnInit } from '@angular/core';
import { ServiceListI } from 'app/models/servicelist.interface';
import { ApiService } from 'app/services/api.service';
import { ServiceService } from 'app/services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public tableData1
  public serviceD:string[]
  public service:ServiceListI

  constructor(private _serviceService:ServiceService, private api:ApiService) { }

  public passService(index: number) {
    this._serviceService.setService(this._serviceService.getServices()[index]);
  }

  public elimService(index: number) {
    this._serviceService.setService(this._serviceService.getServices()[index]);
    this.serviceD = this._serviceService.getService();
    this.service.Name = this.serviceD[0];

    this.api.deleteService(this.service).subscribe(data => {
      console.log(data);
    })
    this.ngOnInit();
  }
  
  ngOnInit() {
    this.api.gTableServices().subscribe(data => {
      console.log(data)
      this._serviceService.setTable(data)
    });
    this.tableData1 = this._serviceService.getTable();
    this.service = {
      Name:'',
      Cost:'',
      Price:'',
      Duration:'',
      Products:[],
      PersonalReq:'',
      Punctuation:''
    }
  }

}
