import { Injectable } from '@angular/core';
import { ProductListI } from 'app/models/productlist.interface';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  public tableData: TableData;
  public product:string[];

  constructor() { 
    this.tableData = {
      headerRow: [ 'Name', 'Brand', 'Price', 'Provider' ],
      dataRows: [[ 'Jabon para carro', 'Germentec', '8900', 'GermentecCR' ]]
    }
  }
  
  getTable() {
    return this.tableData
  };
  setTable(products:ProductListI[]){
    this.tableData.dataRows = []
    for (var product of products) {
      this.tableData.dataRows.push([product.Name,product.Brand,product.Price,product.Provider]) 
    }
  };
  getProducts(){
    return this.tableData.dataRows
  };
  getProduct(){
    return this.product
  };
  setProduct(product: string[]){
    this.product = product
  };
}
