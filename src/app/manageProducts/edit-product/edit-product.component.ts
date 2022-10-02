import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductListI } from 'app/models/productlist.interface';
import { ProviderListI } from 'app/models/providerlist.interface';
import { ApiService } from 'app/services/api.service';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: ProductListI
  providers: ProviderListI[]

  name = new FormControl();
  brand = new FormControl();
  price = new FormControl();
  provider = new FormControl();

  constructor(private api:ApiService, private _productService:ProductService) { }

  public editProduct() {
    
    this.product.Name = this.name.value
    this.product.Brand = this.brand.value
    this.product.Price = this.price.value
    this.product.Provider = this.provider.value

    this.api.editProductAPI(this.product).subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {
    this.product = {
      Name: '',
      Brand: '',
      Price: '',
      Provider: ''
    }

    let productE = this._productService.getProduct()
    this.name.setValue(productE[0])
    this.brand.setValue(productE[1])
    this.price.setValue(productE[2])
    this.provider.setValue(productE[3])

    this.api.gTableProviders().subscribe(data => {
      console.log(data)
      this.providers = data;
    });
  }

}
