import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from "@ng-select/ng-select";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";

import { LbdModule } from '../../lbd/lbd.module';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { PointsComponent } from 'app/managePoints/points.component';

import { ClientsService } from 'app/services/clients.service';
import { WorkersService } from 'app/services/workers.service';
import { BillingService } from 'app/services/billing.service';
import { CitaService } from 'app/services/cita.service';
import { OfficeService } from 'app/services/office.service';
import { ProviderService } from 'app/services/provider.service';
import { ProductService } from 'app/services/product.service';
import { ServiceService } from 'app/services/service.service';
import { UserService } from 'app/services/user.service';


import { ClientsComponent } from '../../manageClients/clients/clients.component';
import { AddClientComponent } from '../../manageClients/addClient/addClient.component';
import { EditClientComponent } from '../../manageClients/editClient/editClient.component';

import { WorkersComponent } from '../../manageWorkers/workers/workers.component';
import { AddWorkerComponent } from '../../manageWorkers/addWorker/addWorker.component';
import { EditWorkerComponent } from '../../manageWorkers/editWorker/editWorker.component';

import { OfficesComponent } from 'app/manageOffices/offices/offices.component';
import { AddOfficeComponent } from 'app/manageOffices/addOffice/addOffice.component';
import { EditOfficeComponent } from 'app/manageOffices/editOffice/editOffice.component';

import { ProvidersComponent } from 'app/manageProviders/providers/providers.component';
import { AddProviderComponent } from 'app/manageProviders/addProvider/addProvider.component';
import { EditProviderComponent } from 'app/manageProviders/editProvider/editProvider.component';

import { ProductsComponent } from 'app/manageProducts/products/products.component';
import { AddProductComponent } from 'app/manageProducts/add-product/add-product.component';
import { EditProductComponent } from 'app/manageProducts/edit-product/edit-product.component';

import { ServicesComponent } from 'app/manageServices/services/services.component';
import { AddServiceComponent } from 'app/manageServices/add-service/add-service.component';
import { EditServiceComponent } from 'app/manageServices/edit-service/edit-service.component';

import { AppointmentsComponent } from '../../manageAppointments/appointments/appointments.component';
import { NewAppointmentsComponent } from '../../manageAppointments/newAppointment/newappointment.component';
import { ModifyAppointmentsComponent } from 'app/manageAppointments/modifyAppointments/modifyappointment.component';

import { BillingComponent } from '../../manageBilling/billing/billing.component';
import { PrebillingComponent } from 'app/manageBilling/prebilling/prebilling.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgMultiSelectDropDownModule,
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    PointsComponent,

    
    ClientsComponent,
    AddClientComponent,
    EditClientComponent,

    WorkersComponent,
    AddWorkerComponent,
    EditWorkerComponent,

    OfficesComponent,
    AddOfficeComponent,
    EditOfficeComponent,

    ProvidersComponent,
    AddProviderComponent,
    EditProviderComponent,

    ProductsComponent,
    AddProductComponent,
    EditProductComponent,

    ServicesComponent,
    AddServiceComponent,
    EditServiceComponent,

    AppointmentsComponent,
    NewAppointmentsComponent,
    ModifyAppointmentsComponent,

    BillingComponent,
    PrebillingComponent,

    
    
    
  ],
  providers: [
    ClientsService,
    WorkersService,
    OfficeService,
    ProviderService,
    ProductService,
    ServiceService,
    BillingService,
    CitaService,
    UserService,
  ]
})

export class AdminLayoutModule {}
