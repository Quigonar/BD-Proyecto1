import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { ClientsService } from 'app/services/clients.service';
import { ClientsListI } from 'app/models/clientslist.interface';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {
  public tableData1
  public clientD:string[]
  public client:ClientsListI

  constructor(private _clientsService:ClientsService, private api:ApiService) { }

  public passClient(index: number) {
    this._clientsService.setClient(this._clientsService.getClients()[index]);
  }

  public elimClient(index: number) {
    this._clientsService.setClient(this._clientsService.getClients()[index]);
    this.clientD = this._clientsService.getClient();
    this.client.ID = this.clientD[3];

    this.api.deleteClient(this.client).subscribe(data => {
      console.log(data);
    })
    this.ngOnInit();
  }
  
  ngOnInit() {
    this.api.gTableClients().subscribe(data => {
      console.log(data)
      this._clientsService.setTable(data)
    });
    this.tableData1 = this._clientsService.getTable();
    this.client = {
      Username: '',
      PhoneNum: '',
      ID: '',
      FirstN: '',
      LastN: '',
      Address: '',
      City: '',
      Country: '',
      Email: '',
      Password: ''
    }
  }

}
