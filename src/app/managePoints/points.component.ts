import { Component, OnInit } from '@angular/core';
import { PointsListI } from 'app/models/pointslist.interface';
import { ApiService } from 'app/services/api.service';
import { UserService} from 'app/services/user.service';
import { firebaserules_v1 } from 'googleapis';
import { data } from 'jquery';
import { runInThisContext } from 'vm';


declare interface TableData {
  headerRow:string[];
  dataRow:string[];
}

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {
  public tableData1: TableData;

  constructor(public _userService:UserService,private api:ApiService) {
    this.tableData1={
      headerRow:["Puntos Disponibles","Puntos Gastados","Puntos Totales"],
      dataRow:[]
    }
   }

  ngOnInit() {
    this.api.gPoints(this._userService.getID()).subscribe(data => {
      console.log(data)
      this.tableData1.dataRow=[data.puntosDisp,data.puntosGast,data.puntosTot]
    });
  }
}
