import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Injectable, OnInit } from '@angular/core';
import { runInThisContext } from 'vm';
import { ClientsListI } from '../models/clientslist.interface';



@Injectable({
  providedIn: 'root'
})

export class UserService{
   /*public userData: string[];
   public id: string;
   public usertype:boolean*/
  
  constructor() { 
    //this.userData= ['Marcos','Gonzalez','118320994','60583801','algo@gmail.com','Calle patito del valle','Cartago','Costa Rica','miusuario','123456789'],
    //this.usertype= true //true cliente | false taller
  }


  getType() {
    return JSON.parse(localStorage.getItem("type"))
  }
  /*getData() {
    return this.userData
  };*/
  getID() {
    return localStorage.getItem("id")
  }
  setType(type:boolean){
    localStorage.setItem("type", type.toString())
    //this.usertype=type
  };

  /*setUser(user:ClientsListI){
    this.userData = []
    this.userData.push(user.FirstN,user.FirstLN,user.SecondLN,user.ID,user.PhoneNum.toString(),user.Email,user.Address.toString(),user.Username,user.Password,user.Points)
  };*/

  setID(ID:string) {
    localStorage.setItem("id", ID)
    //this.id = ID
  }


}