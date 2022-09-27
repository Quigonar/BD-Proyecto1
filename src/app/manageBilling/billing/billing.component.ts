import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { BillingService } from 'app/services/billing.service';


declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  public PDFGen(index: number){
    console.log("PDF of bill " + this._citaBilling.getFactura()[index][0]);
    alert("Se ha descargado el PDF");
  }

  public tableData1: TableData;

  constructor(public _citaBilling:BillingService, private api:ApiService) { }

  ngOnInit() {
    this.api.gTableInvoices().subscribe(data => {
      console.log(data)
      this._citaBilling.setTable(data)
    });
    this.tableData1 = this._citaBilling.getTable();
  }

}
