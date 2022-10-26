import { Component, OnInit, Input} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'app/services/api.service';
import { ClientsService } from 'app/services/clients.service';
import { ClientsListI } from 'app/models/clientslist.interface'

@Component({
  selector: 'app-editClient',
  templateUrl: './editClient.component.html',
  styleUrls: ['./editClient.component.css']
})

export class EditClientComponent implements OnInit {
  public clientsData
  clientE: ClientsListI

  username = new FormControl();
  phoneNumber = new FormControl();
  ID = new FormControl();
  firstName = new FormControl();
  lastName = new FormControl();
  address = new FormControl();
  city = new FormControl();
  country = new FormControl();
  email = new FormControl();
  password = new FormControl();
  
  constructor(private _clientsService:ClientsService, private api:ApiService) { }

  public editClient() {
    this.clientE.Username = this.username.value
    this.clientE.PhoneNum = this.phoneNumber.value
    this.clientE.ID = this.ID.value
    this.clientE.FirstN = this.firstName.value
    this.clientE.LastN = this.lastName.value
    this.clientE.Address = this.address.value
    this.clientE.City = this.city.value
    this.clientE.Country = this.country.value
    this.clientE.Email = this.email.value
    this.clientE.Password = this.password.value

    this.api.editClientAPI(this.clientE).subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {
    this.clientE = {
      Username: '',
      PhoneNum: '',
      ID: '',
      FirstN: '',
      LastN: '',
      Address: '',
      City: '',
      Country: '',
      Email: '',
      Password: '',
      Points: ''
    }
    let client = this._clientsService.getClient()
    this.username.setValue(client[8]);
    this.phoneNumber.setValue(client[2]);
    this.ID.setValue(client[3]);
    this.firstName.setValue(client[0]);
    this.lastName.setValue(client[1]);
    this.address.setValue(client[5]);
    this.city.setValue(client[6]);
    this.country.setValue(client[7]);
    this.email.setValue(client[4]);
    this.password.setValue(client[9]);
  }
}
