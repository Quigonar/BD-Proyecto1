import { Component, OnInit } from '@angular/core';
import { BillListI } from 'app/models/billlist.interface';
import { ApiService } from 'app/services/api.service';
import { BillingService } from 'app/services/billing.service';
import { UserService} from 'app/services/user.service';
import { firebaserules_v1 } from 'googleapis';


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

  public facturaD:string[];
  public factura:BillListI;
  public tableData1: TableData;

  constructor(public _citaBilling:BillingService,public user:UserService,private api:ApiService) {
    
   }

  ngOnInit() {

    if (this.user.getType()) {
      this.api.gTableInvoices2(this.user.getID()).subscribe(data => {
        console.log(data)
        this._citaBilling.setTable(data)
      })
    }
    else {
      this.api.gTableInvoices().subscribe(data => {
        console.log(data)
        this._citaBilling.setTable(data)
      });
    }
    this.tableData1 = this._citaBilling.getTable();
    this.factura = {
      Billnum: '',
      ClientN: '',
      ClientLN: '',
      EmployeeN: '',
      EmployeeLN: '',
      IdTrabajador: '',
      AppointmentN: '',
      DateTime: '',
      Service: '',
      IdCliente: '',
      LicenseP: '',
      Office: '',
      Price: '',
      Extras: [],
      PaymentM: ''
    }
  }

  public PDFGen(index: number){
    this._citaBilling.setFactura(this._citaBilling.getFacturas()[index]);
    this.facturaD = this._citaBilling.getFactura();
    this.api.facturar(this.facturaD[0]).subscribe(data => {
      console.log(data)
    })
    alert("Se ha descargado el PDF de la factura #" + this.facturaD[0]);
  }

  elimInvoice(index: number){
    this._citaBilling.setFactura(this._citaBilling.getFacturas()[index]);
    this.facturaD = this._citaBilling.getFactura();

    this.api.deleteInvoice(this.facturaD[0]).subscribe(data => {
      console.log(data);
    })

    this.ngOnInit()
  }


}
