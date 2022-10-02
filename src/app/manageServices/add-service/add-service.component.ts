import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductListI } from 'app/models/productlist.interface';
import { ServiceListI } from 'app/models/servicelist.interface';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  service: ServiceListI
  products_ : ProductListI
  //productos: string[] = ["Jabon", "Cera", "Quimicos"]

  name = new FormControl();
  cost = new FormControl();
  price = new FormControl();
  duration = new FormControl();
  products = new FormControl();
  personalReq = new FormControl();
  punctuation = new FormControl();

  productos: Array<any>;
  selected: Array<any>;

  constructor(private api:ApiService) { }

  public addService() {
    console.log(this.products.value)
    this.service.Name = this.name.value
    this.service.Cost = this.cost.value
    this.service.Price = this.price.value
    this.service.Duration = this.duration.value
    this.service.Products = this.products.value
    this.service.PersonalReq = this.personalReq.value
    this.service.Punctuation = this.punctuation.value

    this.api.addService(this.service).subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {

    this.productos = [
      { item_id: 1, item_text: 'Jabon' },
      { item_id: 2, item_text: 'Cera' },
      { item_id: 3, item_text: 'Quimicos' },
    ]
    this.selected = [];

    this.service = {
      Name: '',
      Cost: '',
      Price: '',
      Duration: '',
      Products: '',
      PersonalReq: '',
      Punctuation: ''
    }
  }

}
