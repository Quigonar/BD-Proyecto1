import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'app/services/api.service';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { ResponseI } from 'app/models/response.interface';

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

  constructor(private api:ApiService, private router:Router, private route: ActivatedRoute,) { }
  
  ngOnInit(): void {
  }

  onLogin(form) {
    this.api.login(form).subscribe(data => {
      console.log(data)
      if (data.status == "ok" && data.type == "admin") {
        //hacer que corra el layout del admin
      }
      else if (data.status == "ok" && data.type == "client") {
        localStorage.setItem("client",data.message)
        //hacer que corra el layout del cliente sabiendo el indice o id del cliente
      }
    })
    
  }
}
