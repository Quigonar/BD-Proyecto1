import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ClientsListI } from 'app/models/clientslist.interface';
import { ApiService } from 'app/services/api.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  client: ClientsListI

  username = new FormControl()
  phoneNum = new FormControl()
  ID = new FormControl()
  firstN = new FormControl()
  firstLN = new FormControl()
  secondLN = new FormControl()
  address = new FormControl()
  email = new FormControl()
  password = new FormControl()

  constructor(public user:UserService, private api:ApiService) { }

  updatePass() {
    this.client.Password = this.password.value
    this.api.editClientAPI(this.client).subscribe(data => {
      console.log(data)
    })
  }

  ngOnInit() {
    /*let user_ = this.user.getID();
    console.log("type: " + this.user.getType())
    console.log("id2: " + this.user.getID())*/
    //console.log("id: " + this.user.getID())
    this.api.getClient(this.user.getID()).subscribe(data => {
      this.client = data[0]
      //console.log("client: " + this.client.Username)
      this.username.setValue(this.client.Username)
      this.phoneNum.setValue(this.client.PhoneNum.toString())
      this.ID.setValue(this.client.ID)
      this.firstN.setValue(this.client.FirstN)
      this.firstLN.setValue(this.client.FirstLN)
      this.secondLN.setValue(this.client.SecondLN)
      this.address.setValue(this.client.Address.toString())
      this.email.setValue(this.client.Email)
      this.password.setValue(this.client.Password)
      
    })
    //localStorage.setItem("client", JSON.stringify(this.client))

  }

}
