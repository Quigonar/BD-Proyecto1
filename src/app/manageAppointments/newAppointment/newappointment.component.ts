import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { CitaService } from 'app/services/cita.service';
import { AppointmentsListI } from 'app/models/appointmentslist.interface';
import { FormControl } from '@angular/forms';
import { ServiceService } from 'app/services/service.service';
import { ServiceListI } from 'app/models/servicelist.interface';
import { ClientsListI } from 'app/models/clientslist.interface';
import { OfficeListI } from 'app/models/officelist.interface';



@Component({
  selector: 'app-newappointment',
  templateUrl: './newappointment.component.html',
  styleUrls: ['./newappointment.component.css']
})

export class NewAppointmentsComponent implements OnInit {
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


  constructor(private api:ApiService) { }

  public addAppointment(){
      this.appointment.ClientN = this.name.value;
      this.appointment.ClientLN = this.lastName.value;
      this.appointment.ClientID = this.ID.value;
      this.appointment.LicenseP = this.licensePlate.value
      this.appointment.Office = this.office.value
      this.appointment.Service = this.service.value
      this.appointment.DateTime = this.date.value

      this.api.addAppointment(this.appointment).subscribe(data => {
        console.log(data);
      })
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
