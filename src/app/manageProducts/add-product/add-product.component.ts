import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductListI } from 'app/models/productlist.interface';
import { ProviderListI } from 'app/models/providerlist.interface';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: ProductListI
  providers: ProviderListI[]

  name = new FormControl();
  brand = new FormControl();
  price = new FormControl();
  provider = new FormControl();

  constructor(private api:ApiService) { }

  public addProduct() {
    
    this.product.Name = this.name.value
    this.product.Brand = this.brand.value
    this.product.Price = this.price.value
    this.product.Provider = this.provider.value

    this.api.addProduct(this.product).subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {
    this.product = {
      ID: '',
      Name: '',
      Brand: '',
      Price: '',
      Provider: ''
    }

    this.api.gTableProviders().subscribe(data => {
      console.log(data)
      this.providers = data;
    });
  }

}
