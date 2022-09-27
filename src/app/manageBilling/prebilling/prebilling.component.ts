import { Component, OnInit } from '@angular/core';
import { CitaService } from 'app/services/cita.service';
import { BillingService } from 'app/services/billing.service';
import { BillListI } from 'app/models/billlist.interface';
import { ApiService } from 'app/services/api.service';
import { WorkersListI } from 'app/models/workerslist.interface';


@Component({
  selector: 'app-prebilling',
  templateUrl: './prebilling.component.html',
  styleUrls: ['./prebilling.component.css']
})
export class PrebillingComponent implements OnInit {

  public CitaFact:string[];
  public Factura:string[];
  public invoice:BillListI;
  public workers:WorkersListI[];
  

  constructor(private _citaService:CitaService, private _billingService:BillingService, private api:ApiService) { }

  public EmitirFact(){
    //var NameEmp = document.getElementById("FactNameEm") as HTMLInputElement | null;
    //var SurnameEmp= document.getElementById("FacSurnameEm") as HTMLInputElement | null;
    var CedulaEmp = document.getElementById("CedulaEmpFact") as HTMLInputElement | null;
    var EmmtBut =document.getElementById("BotonEmitir") as HTMLInputElement | null;
    var BackBut =document.getElementById("BackButton") as HTMLInputElement | null;

    if(CedulaEmp.value==""){
      alert("Debe completar el espacio de empleado solocitado");
    }else{
      EmmtBut.disabled=true;
      CedulaEmp.disabled=true;

      BackBut.innerHTML="Continuar";
      this.invoice.IdCliente = this.CitaFact[3];
      this.invoice.IdTrabajador = CedulaEmp.value;
      this.invoice.AppointmentN = this.CitaFact[0];
      this.invoice.DateTime = this.CitaFact[7];
      this.invoice.LicenseP = this.CitaFact[4];
      this.invoice.Service = this.CitaFact[5];
      this.invoice.ClientN = this.CitaFact[1];
      this.invoice.ClientLN = this.CitaFact[2];
      this.invoice.Office = this.CitaFact[6];

      this.api.addInvoice(this.invoice).subscribe(data => {
        console.log(data);
      })
      alert("Factura generada correctamente, porfavor oprima el boton continuar")
    }
  }

  public DownPDF(){
    alert("Se logró descargar el PDF");
  }

  
  ngOnInit() {
    this.CitaFact=this._citaService.getCita();
    this.Factura=[ '','','','','','','','','','','',''];
    var NumCitas = document.getElementById("NumCitaFact") as HTMLInputElement | null;
    var NameClientCita = document.getElementById("NombreClientFact") as HTMLInputElement | null;
    var SurnameClientCita = document.getElementById("ApellidosClientFact") as HTMLInputElement | null;
    var CedulaClientCita = document.getElementById("CedulaClientFact") as HTMLInputElement | null;
    var PlacaClientCitas = document.getElementById("PlacaFact") as HTMLInputElement | null;
    var FechayHoraCita = document.getElementById("FechaHoraFact") as HTMLInputElement | null;
    var SucursalCita = document.getElementById("SucursalFact") as HTMLInputElement | null;
    var ServicioCita = document.getElementById("ServicioFact") as HTMLInputElement | null;
    var PriceAmmt=document.getElementById("Precio") as HTMLInputElement | null;

    NumCitas.value=this.CitaFact[0];
    NameClientCita.value=this.CitaFact[1];
    SurnameClientCita.value=this.CitaFact[2];
    CedulaClientCita.value=this.CitaFact[3];
    PlacaClientCitas.value=this.CitaFact[4];
    ServicioCita.value=this.CitaFact[5];
    SucursalCita.value=this.CitaFact[6];
    FechayHoraCita.value=this.CitaFact[7];
    //PriceAmmt.innerHTML="Price: 1234567890";
    /*this.service = {
      serviceN:'',
      serviceP:''
    }

    this.service.serviceN = ServicioCita.value*/
    /*this.api.getServicePrice(this.service).subscribe(data => {
      PriceAmmt.innerHTML="Price: " + data;
    })*/

    /*this.Factura[0]=this.CitaFact[0];
    this.Factura[1]=this.CitaFact[1];
    this.Factura[2]=this.CitaFact[2];
    this.Factura[3]=this.CitaFact[3];
    this.Factura[4]=this.CitaFact[4];
    this.Factura[5]=this.CitaFact[5];
    this.Factura[6]=this.CitaFact[6];
    this.Factura[7]=this.CitaFact[7];*/

    this.api.gTableWorkers().subscribe(data => {
      console.log(data)
      this.workers = data;
    });

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
      IdServicio:''
    }
  }

}
