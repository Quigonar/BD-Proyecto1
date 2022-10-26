import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';

import { ClientsComponent } from '../../manageClients/clients/clients.component';
import { AddClientComponent } from '../../manageClients/addClient/addClient.component';
import { EditClientComponent } from '../../manageClients/editClient/editClient.component';

import { WorkersComponent } from '../../manageWorkers/workers/workers.component';
import { AddWorkerComponent } from '../../manageWorkers/addWorker/addWorker.component';
import { EditWorkerComponent } from '../../manageWorkers/editWorker/editWorker.component';

import { OfficesComponent } from '../../manageOffices/offices/offices.component';
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

import { BillingComponent } from '../../manageBilling/billing/billing.component';
import { PrebillingComponent } from 'app/manageBilling/prebilling/prebilling.component';

import { AppointmentsComponent } from '../../manageAppointments/appointments/appointments.component';
import { NewAppointmentsComponent } from 'app/manageAppointments/newAppointment/newappointment.component';
import { ModifyAppointmentsComponent } from 'app/manageAppointments/modifyAppointments/modifyappointment.component';


export const AdminLayoutRoutes: Routes = [
    /**{ path: 'home',           component: HomeComponent },**/
    { path: 'user',           component: UserComponent },
    
    { path: 'clients',         component: ClientsComponent },
    { path: 'add-client',      component: AddClientComponent },
    { path: 'edit-client',     component: EditClientComponent },

    { path: 'workers',         component: WorkersComponent },
    { path: 'add-worker',      component: AddWorkerComponent },
    { path: 'edit-worker',     component: EditWorkerComponent },

    { path: 'offices',         component: OfficesComponent },
    { path: 'add-office',      component: AddOfficeComponent},
    { path: 'edit-office',     component: EditOfficeComponent},

    { path: 'providers',       component: ProvidersComponent },
    { path: 'add-provider',    component: AddProviderComponent},
    { path: 'edit-provider',   component: EditProviderComponent},

    { path: 'products',        component: ProductsComponent },
    { path: 'add-product',     component: AddProductComponent},
    { path: 'edit-product',    component: EditProductComponent},

    { path: 'services',        component: ServicesComponent },
    { path: 'add-service',     component: AddServiceComponent},
    { path: 'edit-service',    component: EditServiceComponent},

    { path: 'billing',         component: BillingComponent },
    { path: 'pre-billing',       component:PrebillingComponent},

    { path: 'appointments',      component: AppointmentsComponent },
    { path: 'add-appointment',    component:NewAppointmentsComponent},
    { path: 'edit-appointment', component:ModifyAppointmentsComponent},
];