import { Component, OnInit } from '@angular/core';
import { ProductListI } from 'app/models/productlist.interface';
import { ApiService } from 'app/services/api.service';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public tableData1
  public productD:string[]
  public product:ProductListI

  constructor(private _productService:ProductService, private api:ApiService) { }

  public passProduct(index: number) {
    this._productService.setProduct(this._productService.getProducts()[index]);
  }

  public elimProduct(index: number) {
    this._productService.setProduct(this._productService.getProducts()[index]);
    this.productD = this._productService.getProduct();
    this.product.ID = this.productD[4];

    this.api.deleteProduct(this.product).subscribe(data => {
      console.log(data);
    })
    this.ngOnInit();
  }
  
  ngOnInit() {
    this.api.gTableProducts().subscribe(data => {
      console.log(data)
      this._productService.setTable(data)
    });
    this.tableData1 = this._productService.getTable();
    this.product = {
      ID: '',
      Name: '',
      Brand: '',
      Price: '',
      Provider: ''
    }
  }

}
