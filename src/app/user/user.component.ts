import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _UserService:UserService, private api:ApiService) { }

  ngOnInit() {
    console.log("id: " + this._UserService.getID())
    this.api.getClient(this._UserService.getID()).subscribe(data => {
      console.log(data)
    })
  }

}
