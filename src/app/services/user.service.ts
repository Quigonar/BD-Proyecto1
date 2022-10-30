import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Injectable, OnInit } from '@angular/core';
import { runInThisContext } from 'vm';
import { ClientsListI } from '../models/clientslist.interface';



@Injectable({
  providedIn: 'root'
})

export class UserService{
<<<<<<< HEAD
   private userData: string[];
   private usertype:boolean;
   private id:number;

=======
   public userData: string[];
   public id: string;
   public usertype:boolean;
>>>>>>> 47f06006fa939894438a39225ea0d9bdbdd6238f
  
  constructor() { 
    this.id = ""
    this.userData= ['Marcos','Gonzalez','118320994','60583801','algo@gmail.com','Calle patito del valle','Cartago','Costa Rica','miusuario','123456789'],
    this.usertype= true //true cliente | false taller
    this.id=0
  }

<<<<<<< HEAD

  getType(){
=======
  getType() {
>>>>>>> 47f06006fa939894438a39225ea0d9bdbdd6238f
    return this.usertype
  }
  getData() {
    return this.userData
  };
  getID() {
    return this.id
  }

  getID(){
    return this.id
  }
  setType(type:boolean){
    this.usertype=type
  };

  setUser(user:ClientsListI){
    this.userData = []
    this.userData.push(user.FirstN,user.FirstLN,user.SecondLN,user.ID,user.PhoneNum.toString(),user.Email,user.Address.toString(),user.Username,user.Password,user.Points)
  };

  setID(ID:string) {
    this.id = ID
  }


}