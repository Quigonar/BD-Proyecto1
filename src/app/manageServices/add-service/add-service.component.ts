import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductListI } from 'app/models/productlist.interface';
import { ServiceListI } from 'app/models/servicelist.interface';
import { ApiService } from 'app/services/api.service';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})

export class AddServiceComponent implements OnInit {

  

  service: ServiceListI
  productsNeeded: string[]
  productos: TableData;

  name = new FormControl();
  cost = new FormControl();
  price = new FormControl();
  duration = new FormControl();
  products = new FormControl();
  personalReq = new FormControl();
  punctuation = new FormControl();
  selected = [];
  dropdownSettings:IDropdownSettings={};

  constructor(private api:ApiService) { 
    this.productos = {
      headerRow: [],
      dataRows: []
    }
  }

  public addService() {
    //console.log(this.products.value.toString().replaceAll(',',', '))
    this.service.Name = this.name.value
    this.service.Cost = this.cost.value
    //this.service.Price = this.price.value
    this.service.Duration = this.duration.value
    this.service.Products = (this.products.value.replace(" ", "")).split(",")
    //this.service.PersonalReq = this.personalReq.value
    //this.service.Punctuation = this.punctuation.value

    this.api.addService(this.service).subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {

    /*this.selected = [];
    this.dropdownSettings = {
      enableCheckAll: false,
      textField: 'product_name',
      noDataAvailablePlaceholderText: "There is no products added in the system",
      allowSearchFilter: true
    }*/

    this.productos.headerRow = ["Products", "Price", "Brand"]

    this.service = {
      Name: '',
      ID: '',
      Cost: '',
      Price: '',
      Duration: '',
      Products: [],
      PersonalReq: '',
      Punctuation: ''
    }

    this.api.gTableProducts().subscribe(data => {
      for (var product of data){
        this.productos.dataRows.push([product.Name,product.Price,product.Brand])
      }
    })
  }
}