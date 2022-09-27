import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { CitaService } from 'app/services/cita.service';
import { AppointmentsListI } from 'app/models/appointmentslist.interface';

@Component({
  selector: 'app-modifyappointment',
  templateUrl: './modifyappointment.component.html',
  styleUrls: ['./modifyappointment.component.css']
})

export class ModifyAppointmentsComponent implements OnInit {
  
  
  public Cita: string[];
  public ModCita: string[];
  appointmentE:AppointmentsListI;
 

  constructor(private _citaService:CitaService, private api:ApiService) { }
  
  public ModifyCita(){
    var NewNameClientCita = document.getElementById("ChangeAppointmentNombre") as HTMLInputElement | null;
    var NewSurnameClientCita = document.getElementById("ChangeAppointmentApellidos") as HTMLInputElement | null;
    var NewCedulaClientCita = document.getElementById("ChangeAppointmentCedula") as HTMLInputElement | null;
    var NewPlacaClientCitas = document.getElementById("ChangeAppointmentPlaca") as HTMLInputElement | null;
    var NewFechayHoraCita = document.getElementById("ChangeAppointmentFechaHora") as HTMLInputElement | null;
    var NewSucursalCita = document.getElementById("ChangeAppointmentSucursal") as HTMLInputElement | null;
    var NewServicioCita = document.getElementById("ChangeAppointmentServicio") as HTMLInputElement | null;
    
    if((NewCedulaClientCita.value=="")||(NewNameClientCita.value=="")||(NewSurnameClientCita.value=="")||(NewPlacaClientCitas.value=="")||(NewFechayHoraCita.value=="")||(NewSucursalCita.value=="")||(NewServicioCita.value=="")){
      alert("Se deben de completar todas las casillas")
    }else{
      /*this.ModCita[0]=this.Cita[0];
      this.ModCita[1]=NewNameClientCita.value;
      this.ModCita[2]=NewSurnameClientCita.value;
      this.ModCita[3]=NewCedulaClientCita.value;
      this.ModCita[4]=NewPlacaClientCitas.value;
      this.ModCita[5]=NewServicioCita.value;
      this.ModCita[6]=NewSucursalCita.value;
      this.ModCita[7]=NewFechayHoraCita.value;
      this._citaService.setCitas(this.ModCita);*/
      this.appointmentE.AppointmentN = this.Cita[0]
      this.appointmentE.ClientN = NewNameClientCita.value;
      this.appointmentE.ClientLN = NewSurnameClientCita.value;
      this.appointmentE.ClientID = NewCedulaClientCita.value;
      this.appointmentE.LicenseP = NewPlacaClientCitas.value
      this.appointmentE.Office = NewSucursalCita.value
      this.appointmentE.Service = NewServicioCita.value
      this.appointmentE.DateTime = NewFechayHoraCita.value

      this.api.editAppointmentAPI(this.appointmentE).subscribe(data => {
        console.log(data);
      })

      alert("Se han efectuado cambios sobre la cita " + this.Cita[0]);
    }
    
  }


  ngOnInit() { 
    this.Cita=this._citaService.getCita();
    this.ModCita=[ '','','','','', '','',''];
    var NumCitas = document.getElementById("NumCita") as HTMLInputElement | null;
    var NameClientCita = document.getElementById("ChangeAppointmentNombre") as HTMLInputElement | null;
    var SurnameClientCita = document.getElementById("ChangeAppointmentApellidos") as HTMLInputElement | null;
    var CedulaClientCita = document.getElementById("ChangeAppointmentCedula") as HTMLInputElement | null;
    var PlacaClientCitas = document.getElementById("ChangeAppointmentPlaca") as HTMLInputElement | null;
    var FechayHoraCita = document.getElementById("ChangeAppointmentFechaHora") as HTMLInputElement | null;
    var SucursalCita = document.getElementById("ChangeAppointmentSucursal") as HTMLInputElement | null;
    var ServicioCita = document.getElementById("ChangeAppointmentServicio") as HTMLInputElement | null;
        

    NumCitas.value=this.Cita[0];
    NameClientCita.value=this.Cita[1];
    SurnameClientCita.value=this.Cita[2];
    CedulaClientCita.value=this.Cita[3];
    PlacaClientCitas.value=this.Cita[4];
    ServicioCita.value=this.Cita[5];
    SucursalCita.value=this.Cita[6];
    FechayHoraCita.value=this.Cita[7];
    
    this.appointmentE = {
      AppointmentN: '',
      ClientN: '',
      ClientLN: '',
      ClientID: '',
      LicenseP: '',
      Office: '',
      Service: '',
      DateTime: ''
    }

  }

}
