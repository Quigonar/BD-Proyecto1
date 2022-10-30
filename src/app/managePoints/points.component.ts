import { Component, OnInit } from '@angular/core';
import { PointsListI } from 'app/models/pointslist.interface';
import { ApiService } from 'app/services/api.service';
import { UserService} from 'app/services/user.service';
import { firebaserules_v1 } from 'googleapis';
import { data } from 'jquery';
import { runInThisContext } from 'vm';


declare interface TableData {
  headerRow:string[];
  dataRow:number[];
}

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  public facturaD:string[];
  public factura:PointsListI;
  public tableData1: TableData;

  constructor(public _userService:UserService,private api:ApiService) {
    
   }

  ngOnInit() {
    this.api.gPoints(this._userService.getID().toString()).subscribe(data => {
      console.log(data)
      this.tableData1.headerRow=["Puntos Disponibles","Puntos Gastados","Puntos Totales"]
      this.tableData1.dataRow=[data[0].PuntosDisp,data[0].PuntosGast,data[0].PuntosTot]

    });
    
    this.tableData1={
      headerRow:["Puntos Disponibles","Puntos Gastados","Puntos Totales"],
      dataRow:[1000,500,1500]
    }
        
      this.factura = {
      PuntosDisp:1000,
      PuntosGast:500,
      PuntosTot:1500,
    }
  }
}
