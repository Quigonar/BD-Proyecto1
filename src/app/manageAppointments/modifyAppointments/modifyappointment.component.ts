import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { CitaService } from 'app/services/cita.service';
import { AppointmentsListI } from 'app/models/appointmentslist.interface';
import { FormControl } from '@angular/forms';
import { ClientsListI } from 'app/models/clientslist.interface';
import { ServiceListI } from 'app/models/servicelist.interface';
import { OfficeListI } from 'app/models/officelist.interface';

@Component({
  selector: 'app-modifyappointment',
  templateUrl: './modifyappointment.component.html',
  styleUrls: ['./modifyappointment.component.css']
})

export class ModifyAppointmentsComponent implements OnInit {
  appointment:AppointmentsListI;
  services:ServiceListI[]
  clients:ClientsListI[]
  offices:OfficeListI[]

  name = new FormControl();
  lastName = new FormControl();
  ID = new FormControl();
  licensePlate = new FormControl();
  date = new FormControl();
  office = new FormControl();
  service = new FormControl();


  constructor(private api:ApiService, private _citaService:CitaService) { }

  public editAppointment(){
      this.appointment.ClientN = this.name.value;
      this.appointment.ClientLN = this.lastName.value;
      this.appointment.ClientID = this.ID.value;
      this.appointment.LicenseP = this.licensePlate.value
      this.appointment.Office = this.office.value
      this.appointment.Service = this.service.value
      this.appointment.DateTime = this.date.value

      this.api.editAppointmentAPI(this.appointment).subscribe(data => {
        console.log(data);
      })
    }

  ngOnInit() { 

    let cita = this._citaService.getCita()
    this.name.setValue(cita[1])
    this.lastName.setValue(cita[2])
    this.ID.setValue(cita[3])
    this.licensePlate.setValue(cita[4])
    this.office.setValue(cita[6])
    this.service.setValue(cita[5])
    this.date.setValue(cita[7])

    this.appointment = {
      AppointmentN: '',
      ClientN: '',
      ClientLN: '',
      ClientID: '',
      LicenseP: '',
      Office: '',
      Service: '',
      DateTime: '',
      EmpN:'',
      EmpLN:'',
      EmpID:'',
    }

    this.api.gTableServices().subscribe(data=> {
      this.services = data
    })

    this.api.gTableClients().subscribe(data=> {
      this.clients = data
    })

    this.api.gTableOffices().subscribe(data=> {
      this.offices = data
    })
  }

}
