import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'app/services/api.service';
import { ClientsListI } from '../../models/clientslist.interface'

@Component({
  selector: 'app-addClient',
  templateUrl: './addClient.component.html',
  styleUrls: ['./addClient.component.css']
})
export class AddClientComponent implements OnInit {

  client: ClientsListI

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

  constructor(private api:ApiService) { }

  public addClient() {
    
    this.client.Username = this.username.value
    this.client.PhoneNum = this.phoneNumber.value
    this.client.ID = this.ID.value
    this.client.FirstN = this.firstName.value
    this.client.LastN = this.lastName.value
    this.client.Address = this.address.value
    this.client.City = this.city.value
    this.client.Country = this.country.value
    this.client.Email = this.email.value
    this.client.Password = this.password.value

    this.api.addClient(this.client).subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {
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
      Password: '',
      Points: ''
    }
  }

}
