import { Component, OnInit } from '@angular/core';
import { CitaService } from 'app/services/cita.service';
import { BillListI } from 'app/models/billlist.interface';
import { ApiService } from 'app/services/api.service';
import { FormControl } from '@angular/forms';
import { AppointmentsListI } from 'app/models/appointmentslist.interface';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ProductListI } from 'app/models/productlist.interface';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-prebilling',
  templateUrl: './prebilling.component.html',
  styleUrls: ['./prebilling.component.css']
})
export class PrebillingComponent implements OnInit {

  appointment:AppointmentsListI;
  invoice:BillListI;
  products: ProductListI[]
  productos: TableData;

  appointNum:string;
  name = new FormControl();
  lastName = new FormControl();
  ID = new FormControl();
  licensePlate = new FormControl();
  date = new FormControl();
  office = new FormControl();
  service = new FormControl();
  empName = new FormControl();
  empLName = new FormControl();
  empID = new FormControl();
  consumption = new FormControl();
  payM = new FormControl();

  selected = [];
  dropdownSettings:IDropdownSettings={};


  constructor(private api:ApiService, private _citaService:CitaService) {
    this.productos = {
      headerRow: [],
      dataRows: []
    }
   }

  public billAppointment(){
      this.invoice.AppointmentN = this.appointNum
      this.invoice.ClientN = this.name.value
      this.invoice.ClientLN = this.lastName.value
      this.invoice.IdCliente = this.ID.value
      this.invoice.LicenseP = this.licensePlate.value
      this.invoice.Office = this.office.value
      this.invoice.Service = this.service.value
      this.invoice.DateTime = this.date.value
      this.invoice.EmployeeN = this.empName.value
      this.invoice.EmployeeLN = this.empLName.value
      this.invoice.IdTrabajador = this.empID.value
      this.invoice.Extras = (this.consumption.value.replace(" ", "")).split(",")
      this.invoice.PaymentM = this.payM.value
      //console.log(this.invoice)
      this.api.addInvoice(this.invoice).subscribe(data => {
        console.log(data);
      })
    }

  ngOnInit() { 

    let cita = this._citaService.getCita()
    this.appointNum = cita[0]
    this.name.setValue(cita[1])
    this.lastName.setValue(cita[2])
    this.ID.setValue(cita[3])
    this.licensePlate.setValue(cita[4])
    this.office.setValue(cita[6])
    this.service.setValue(cita[5])
    this.date.setValue(cita[7])
    this.empName.setValue(cita[8])
    this.empLName.setValue(cita[9])
    this.empID.setValue(cita[10])

    this.name.disable();
    this.lastName.disable();
    this.ID.disable();
    this.licensePlate.disable();
    this.office.disable();
    this.service.disable();
    this.date.disable();
    this.empName.disable();
    this.empLName.disable();
    this.empID.disable();

    this.productos.headerRow = ["Products", "Price", "Brand"]
    this.api.gTableProducts().subscribe(data => {
      for (var product of data){
        this.productos.dataRows.push([product.Name,product.Price,product.Brand])
      }
    })
    /*this.selected = [];
    this.dropdownSettings = {
      enableCheckAll: false,
      textField: 'product_name',
      noDataAvailablePlaceholderText: "There is no products added in the system",
      allowSearchFilter: true
    }*/

    this.invoice = {
      Billnum:'',
      ClientN:'',
      ClientLN:'',
      EmployeeN:'',
      EmployeeLN:'',
      IdTrabajador:'',
      AppointmentN:'',
      DateTime:'',
      Service:'',
      IdCliente:'',
      LicenseP:'',
      Office:'',
      Price:'',
      Extras:[],
      PaymentM:''
    }
  }

}
