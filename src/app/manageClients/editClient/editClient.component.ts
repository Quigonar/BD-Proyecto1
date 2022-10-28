import { Component, OnInit, Input} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'app/services/api.service';
import { ClientsService } from 'app/services/clients.service';
import { ClientsListI } from 'app/models/clientslist.interface'
import { throws } from 'assert';

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
  secondlastName = new FormControl();
  address = new FormControl();
  email = new FormControl();
  password = new FormControl();
  
  constructor(private _clientsService:ClientsService, private api:ApiService) { }

  public editClient() {
    this.clientE.Username = this.username.value
    this.clientE.PhoneNum = (this.phoneNumber.value.replace(" ", "")).split(",")
    this.clientE.ID = this.ID.value
    this.clientE.FirstN = this.firstName.value
    this.clientE.FirstLN = this.lastName.value
    this.clientE.SecondLN = this.secondlastName.value
    this.clientE.Address = (this.address.value.replace(" ", "")).split(",")
    this.clientE.Email = this.email.value
    this.clientE.Password = this.password.value

    this.api.editClientAPI(this.clientE).subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {
    this.clientE = {
      Username: '',
      PhoneNum: [],
      ID: '',
      FirstN: '',
      FirstLN: '',
      SecondLN: '',
      Address: [],
      Email: '',
      Password: '',
      Points: ''
    }

    

    let client = this._clientsService.getClient()
    this.username.setValue(client[7]);
    this.phoneNumber.setValue(client[3]);
    this.ID.setValue(client[4]);
    this.firstName.setValue(client[0]);
    this.lastName.setValue(client[1]);
    this.secondlastName.setValue(client[2])
    this.address.setValue(client[6]);
    this.email.setValue(client[5]);
    this.password.setValue(client[8]);

    /*this.api.getClient(client[4]).subscribe(data => {
      this.clientE = data
      console.log(data)
      console.log(this.clientE.PhoneNum)
      this.phoneNumber.setValue(data.PhoneNum)
      this.address.setValue(data.Address)
    })*/

    this.ID.disable();
  }
}
