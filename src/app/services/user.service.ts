import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Injectable, OnInit } from '@angular/core';
import { runInThisContext } from 'vm';
import { ClientsListI } from '../models/clientslist.interface';



@Injectable({
  providedIn: 'root'
})

export class UserService{
   private userData: string[];
   private usertype:boolean;
   private id:number;

  
  constructor() { 
    this.userData= ['Marcos','Gonzalez','118320994','60583801','algo@gmail.com','Calle patito del valle','Cartago','Costa Rica','miusuario','123456789'],
    this.usertype= true //true cliente | false taller
    this.id=0
  }


  getType(){
    return this.usertype
  }
  getData() {
    return this.userData
  };

  getID(){
    return this.id
  }
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