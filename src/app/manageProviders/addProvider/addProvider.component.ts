import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProviderListI } from 'app/models/providerlist.interface';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-addProvider',
  templateUrl: './addProvider.component.html',
  styleUrls: ['./addProvider.component.css']
})
export class AddProviderComponent implements OnInit {
  provider: ProviderListI

  name = new FormControl();
  ID = new FormControl();
  address = new FormControl();
  email = new FormControl();
  contact = new FormControl();

  constructor(private api:ApiService) { }

  public addProvider() {
    
    this.provider.Name = this.name.value
    this.provider.ID = this.ID.value
    this.provider.Address = this.address.value
    this.provider.Email = this.email.value
    this.provider.Contact = this.contact.value

    this.api.addProvider(this.provider).subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {
    this.provider = {
      Name: '',
      ID: '',
      Address: '',
      Email: '',
      Contact: ''
    }
  }

}
