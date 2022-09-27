import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { CitaService } from 'app/services/cita.service';
import { AppointmentsListI } from 'app/models/appointmentslist.interface';



@Component({
  selector: 'app-newappointment',
  templateUrl: './newappointment.component.html',
  styleUrls: ['./newappointment.component.css']
})

export class NewAppointmentsComponent implements OnInit {
  appointment:AppointmentsListI;
  newCita:string[];

  constructor(private _citaService:CitaService, private api:ApiService) { }

  public createnewapp(){
    var NameClientCita = document.getElementById("AppointmentNombre") as HTMLInputElement | null;
    var SurnameClientCita = document.getElementById("AppointmentApellidos") as HTMLInputElement | null;
    var CedulaClientCita = document.getElementById("AppointmentCedula") as HTMLInputElement | null;
    var PlacaClientCitas = document.getElementById("AppointmentPlaca") as HTMLInputElement | null;
    var FechayHoraCita = document.getElementById("AppointmentFechaHora") as HTMLInputElement | null;
    var SucursalCita = document.getElementById("AppointmentSucursal") as HTMLInputElement | null;
    var ServicioCita = document.getElementById("AppointmentServicio") as HTMLInputElement | null;
    var BackBut = document.getElementById("BackB") as HTMLInputElement | null;
    var AddButton = document.getElementById("AddB") as HTMLInputElement | null;
    
    if((CedulaClientCita.value=="")||(NameClientCita.value=="")||(SurnameClientCita.value=="")||(PlacaClientCitas.value=="")||(FechayHoraCita.value=="")||(SucursalCita.value=="")||(ServicioCita.value=="")){
      alert("Se deben de completar todas las casillas")
    }else{
      this.newCita[0]=String(this._citaService.IDNewCita);
      this._citaService.IDNewCita++;
      /*this.newCita[1]=NameClientCita.value;
      this.newCita[2]=SurnameClientCita.value;
      this.newCita[3]=CedulaClientCita.value;
      this.newCita[4]=PlacaClientCitas.value;
      this.newCita[6]=SucursalCita.value;
      this.newCita[5]=ServicioCita.value;
      this.newCita[7]=FechayHoraCita.value;
      this._citaService.appendCitas(this.newCita);*/
      this.appointment.AppointmentN = this.newCita[0]
      this.appointment.ClientN = NameClientCita.value;
      this.appointment.ClientLN = SurnameClientCita.value;
      this.appointment.ClientID = CedulaClientCita.value;
      this.appointment.LicenseP = PlacaClientCitas.value
      this.appointment.Office = SucursalCita.value
      this.appointment.Service = ServicioCita.value
      this.appointment.DateTime = FechayHoraCita.value

      this.api.addAppointment(this.appointment).subscribe(data => {
        console.log(data);
      })

      NameClientCita.disabled=true;
      SurnameClientCita.disabled=true;
      CedulaClientCita.disabled=true;
      PlacaClientCitas.disabled=true;
      SucursalCita.disabled=true;
      ServicioCita.disabled=true;
      FechayHoraCita.disabled=true;
      AddButton.disabled=true;
      BackBut.innerHTML="Continuar";
      alert("Se ha agregado la cita,su número de cita es "+ this.newCita[0]+ " por favor presione continuar.");


    }

  }

  ngOnInit() { 
    this.appointment = {
      AppointmentN: '',
      ClientN: '',
      ClientLN: '',
      ClientID: '',
      LicenseP: '',
      Office: '',
      Service: '',
      DateTime: ''
    }
    this.newCita=["","","","","","","","",""]
  }

}
