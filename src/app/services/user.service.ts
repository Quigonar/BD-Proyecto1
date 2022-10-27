import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Injectable, OnInit } from '@angular/core';
import { ClientsListI } from '../models/clientslist.interface';



@Injectable({
  providedIn: 'root'
})

export class UserService{
   private userData: string[];
   private usertype:boolean;
  
  constructor() { 
    this.userData= ['Marcos','Gonzalez','118320994','60583801','algo@gmail.com','Calle patito del valle','Cartago','Costa Rica','miusuario','123456789'],
    this.usertype= false //true cliente | false taller
    console.log("It should be initialized2")
  }

  getType(){
    return this.usertype
  }
  getData() {
    return this.userData
  };

  setType(type:boolean){
    this.usertype=type
  };

  setUser(users:ClientsListI[]){
    this.userData = []
    for (var user of users) {
      this.userData.push(user.FirstN,user.LastN,user.ID,user.PhoneNum,user.Email,user.Address,user.City,user.Country,user.Username,user.Password) 
    }
  };


}