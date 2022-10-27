import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProviderListI } from 'app/models/providerlist.interface';
import { ApiService } from 'app/services/api.service';
import { ProviderService } from 'app/services/provider.service';

@Component({
  selector: 'app-editProvider',
  templateUrl: './editProvider.component.html',
  styleUrls: ['./editProvider.component.css']
})
export class EditProviderComponent implements OnInit {
  provider: ProviderListI

  name = new FormControl();
  ID = new FormControl();
  address = new FormControl();
  email = new FormControl();
  contact = new FormControl();

  constructor(private api:ApiService, private _providerService:ProviderService) { }

  public editProvider() {
    
    this.provider.Name = this.name.value
    this.provider.ID = this.ID.value
    this.provider.Address = this.address.value
    this.provider.Email = this.email.value
    this.provider.Contact = this.contact.value

    this.api.editProviderAPI(this.provider).subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {
    
    let providerE = this._providerService.getProvider();
    this.name.setValue(providerE[0])
    this.ID.setValue(providerE[1])
    this.address.setValue(providerE[2])
    this.email.setValue(providerE[3])
    this.contact.setValue(providerE[4])

    this.provider = {
      Name: '',
      ID: '',
      Address: '',
      Email: '',
      Contact: ''
    }

    this.ID.disable();
  }

}
