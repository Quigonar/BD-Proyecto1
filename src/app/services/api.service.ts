import { Injectable } from '@angular/core';
import { ClientsListI } from '../models/clientslist.interface';
import { WorkersListI } from '../models/workerslist.interface';
import { AppointmentsListI } from '../models/appointmentslist.interface';
import { ResponseI } from '../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { BillListI } from '../models/billlist.interface';
import { OfficeListI } from 'app/models/officelist.interface';
import { ProviderListI } from 'app/models/providerlist.interface';
import { ProductListI } from 'app/models/productlist.interface';
import { ServiceListI } from 'app/models/servicelist.interface';
import { LoginInterface } from 'app/models/login.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "https://localhost:7102/"

  constructor(private http:HttpClient) { }

  login(form:LoginInterface):Observable<ResponseI>{
    console.log(form)
    let dir = this.url + "login"
    return this.http.post<ResponseI>(dir,form)
  }

  gTableClients():Observable<ClientsListI[]>{
    let dir = this.url + "cliente/lista"
    return this.http.get<ClientsListI[]>(dir)
  }
  addClient(client:ClientsListI):Observable<ResponseI>{
    let dir = this.url + "cliente/guardar"
    return this.http.post<ResponseI>(dir,client)
  }
  editClientAPI(client:ClientsListI):Observable<ResponseI>{
    let dir = this.url + "cliente/update"
    return this.http.post<ResponseI>(dir,client)
  }
  deleteClient(client:ClientsListI):Observable<ResponseI>{
    let dir = this.url + "cliente/delete"
    return this.http.post<ResponseI>(dir,client)
  }


  gTableOffices():Observable<OfficeListI[]>{
    let dir = this.url + "sucursal/lista"
    return this.http.get<OfficeListI[]>(dir)
  }
  addOffice(office:OfficeListI):Observable<ResponseI>{
    let dir = this.url + "sucursal/guardar"
    return this.http.post<ResponseI>(dir,office)
  }
  editOfficeAPI(office:OfficeListI):Observable<ResponseI>{
    let dir = this.url + "sucursal/update"
    return this.http.post<ResponseI>(dir,office)
  }
  deleteOffice(office:OfficeListI):Observable<ResponseI>{
    let dir = this.url + "sucursal/delete"
    return this.http.post<ResponseI>(dir,office)
  }


  gTableProviders():Observable<ProviderListI[]>{
    let dir = this.url + "proveedor/lista"
    return this.http.get<ProviderListI[]>(dir)
  }
  addProvider(provider:ProviderListI):Observable<ResponseI>{
    let dir = this.url + "proveedor/guardar"
    return this.http.post<ResponseI>(dir,provider)
  }
  editProviderAPI(provider:ProviderListI):Observable<ResponseI>{
    let dir = this.url + "proveedor/update"
    return this.http.post<ResponseI>(dir,provider)
  }
  deleteProvider(provider:ProviderListI):Observable<ResponseI>{
    let dir = this.url + "proveedor/delete"
    return this.http.post<ResponseI>(dir,provider)
  }


  gTableProducts():Observable<ProductListI[]>{
    let dir = this.url + "producto/lista"
    return this.http.get<ProductListI[]>(dir)
  }
  addProduct(product:ProductListI):Observable<ResponseI>{
    let dir = this.url + "producto/guardar"
    return this.http.post<ResponseI>(dir,product)
  }
  editProductAPI(product:ProductListI):Observable<ResponseI>{
    let dir = this.url + "producto/update"
    return this.http.post<ResponseI>(dir,product)
  }
  deleteProduct(product:ProductListI):Observable<ResponseI>{
    let dir = this.url + "producto/delete"
    return this.http.post<ResponseI>(dir,product)
  }


  gTableServices():Observable<ServiceListI[]>{
    let dir = this.url + "servicio/lista"
    return this.http.get<ServiceListI[]>(dir)
  }
  addService(office:ServiceListI):Observable<ResponseI>{
    let dir = this.url + "servicio/guardar"
    return this.http.post<ResponseI>(dir,office)
  }
  editServiceAPI(office:ServiceListI):Observable<ResponseI>{
    let dir = this.url + "servicio/update"
    return this.http.post<ResponseI>(dir,office)
  }
  deleteService(office:ServiceListI):Observable<ResponseI>{
    let dir = this.url + "servicio/delete"
    return this.http.post<ResponseI>(dir,office)
  }


  gTableWorkers():Observable<WorkersListI[]>{
    let dir = this.url + "trabajador/lista"
    return this.http.get<WorkersListI[]>(dir)
  }
  addWorker(worker:WorkersListI):Observable<ResponseI>{
    //console.log(worker)
    let dir = this.url + "trabajador/guardar"
    return this.http.post<ResponseI>(dir,worker)
  }
  editWorkerAPI(worker:WorkersListI):Observable<ResponseI>{
    //console.log(worker)
    let dir = this.url + "trabajador/update"
    return this.http.post<ResponseI>(dir,worker)
  }
  deleteWorker(worker:WorkersListI):Observable<ResponseI>{
    //console.log(worker)
    let dir = this.url + "trabajador/delete"
    return this.http.post<ResponseI>(dir,worker)
  }


  gTableAppointments():Observable<AppointmentsListI[]>{
    let dir = this.url + "cita/lista"
    return this.http.get<AppointmentsListI[]>(dir)
  }
  addAppointment(appointment:AppointmentsListI):Observable<ResponseI>{
    //console.log(appointment)
    let dir = this.url + "cita/guardar"
    return this.http.post<ResponseI>(dir,appointment)
  }
  editAppointmentAPI(appointment:AppointmentsListI):Observable<ResponseI>{
    //console.log(appointment)
    let dir = this.url + "cita/update"
    return this.http.post<ResponseI>(dir,appointment)
  }
  deleteAppointment(appointment:AppointmentsListI):Observable<ResponseI>{
    //console.log(appointment)
    let dir = this.url + "cita/delete"
    return this.http.post<ResponseI>(dir,appointment)
  }


  gTableInvoices():Observable<BillListI[]>{
    let dir = this.url + "factura/lista"
    return this.http.get<BillListI[]>(dir)
  }
  addInvoice(invoice:BillListI):Observable<ResponseI>{
    //console.log(invoice)
    let dir = this.url + "factura/guardar"
    return this.http.post<ResponseI>(dir,invoice)
  }
  deleteInvoice(invoice:BillListI):Observable<ResponseI>{
    let dir = this.url + "factura/delete"
    return this.http.post<ResponseI>(dir,invoice)
  }
}
