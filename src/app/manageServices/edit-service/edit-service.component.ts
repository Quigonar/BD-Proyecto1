import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductListI } from 'app/models/productlist.interface';
import { ServiceListI } from 'app/models/servicelist.interface';
import { ApiService } from 'app/services/api.service';
import { ServiceService } from 'app/services/service.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import internal = require('stream');

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  service: ServiceListI

  name = new FormControl();
  cost = new FormControl();
  price = new FormControl();
  duration = new FormControl();
  products = new FormControl();
  personalReq = new FormControl();
  punctuation = new FormControl();

  productos: TableData;
  selected = [];
  dropdownSettings:IDropdownSettings={};

  constructor(private api:ApiService, private _serviceService:ServiceService) {
    this.productos = {
      headerRow: [],
      dataRows: []
    }
   }

  public editService() {
    let service = this._serviceService.getService();
    this.service.Name = this.name.value
    this.service.Cost = this.cost.value
    this.service.Price = this.price.value
    this.service.Duration = this.duration.value
    this.service.Products = (this.products.value.replace(" ", "")).split(",")
    this.service.PersonalReq = this.personalReq.value
    //this.service.Punctuation = this.punctuation.value
    this.service.ID = service[7]

    this.api.editServiceAPI(this.service).subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {

    /*this.productos = ["Jabon","Cera","Quimicos"]
      /*{ item_id: 1, product_name: 'Jabon' },
      { item_id: 2, product_name: 'Cera' },
      { item_id: 3, product_name: 'Quimicos' },
    ]*/

    let service = this._serviceService.getService();
    this.name.setValue(service[0])
    this.cost.setValue(service[1])
    this.price.setValue(service[2])
    this.duration.setValue(service[3])
    this.products.setValue(service[4])
    this.personalReq.setValue(service[5])
    this.punctuation.setValue(service[6])

    this.productos.headerRow = ["Products", "Price", "Brand"]

    this.api.gTableProducts().subscribe(data => {
      for (var product of data){
        this.productos.dataRows.push([product.Name,product.Price,product.Brand])
      }
    })

    /*this.selected = service[4].split(",");
    this.dropdownSettings = {
      enableCheckAll: false,
      textField: 'product_name',
      noDataAvailablePlaceholderText: "There is no products added in the system",
      allowSearchFilter: true
    }*/

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
  }

}
