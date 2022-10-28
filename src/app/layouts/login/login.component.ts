import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'app/services/api.service';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { ResponseI } from 'app/models/response.interface';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    user : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  id:string;

  constructor(private api:ApiService, private user:UserService) { }
  
  ngOnInit(): void {
  }

  onLogin(form) {
    this.api.login(form).subscribe(data => {
      console.log(data)
      if (data.status == "ok" && data.type == "Trabajador") {
        this.user.setType(false)
      }
      else if (data.status == "ok" && data.type == "Cliente") {
        this.user.setType(true);
        this.id = data.id
      }
    })
    
    /*this.api.getClient(this.id).subscribe(data2 => {
      setTimeout(()=>{                           
        console.log(this.id)
        console.log("data: " + data2.FirstN)
        this.user.setUser(data2)
      }, 1000);
    }) */
  }
}
