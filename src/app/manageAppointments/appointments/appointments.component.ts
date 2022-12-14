import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { CitaService } from 'app/services/cita.service';
import { AppointmentsListI } from 'app/models/appointmentslist.interface';
import { UserService } from 'app/services/user.service';


declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})

export class AppointmentsComponent implements OnInit {

  public tableData1: TableData;
  public citaD:string[];
  public cita:AppointmentsListI;

  constructor(public _citaService:CitaService, private api:ApiService, public user:UserService) {
  }

  public passCita(index:number){
    this._citaService.setCita(this._citaService.getCitas()[index]);
  }

  public elimCita(index:number){
    this._citaService.setCita(this._citaService.getCitas()[index]);
    this.citaD = this._citaService.getCita();
    this.cita.AppointmentN = this.citaD[0];

    this.api.deleteAppointment(this.cita).subscribe(data => {
      console.log(data);
    })
    this.ngOnInit();
  }

  ngOnInit() { 
    if (this.user.getType()) {
      this.api.gTableAppointments2(this.user.getID()).subscribe(data => {
        console.log(data)
        this._citaService.setTable(data)
      });
    }
    else {
      this.api.gTableAppointments().subscribe(data => {
        console.log(data)
        this._citaService.setTable(data)
      });
    }
    
    this.tableData1 = this._citaService.getTable();
    this.cita = {
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
  }
 
}
