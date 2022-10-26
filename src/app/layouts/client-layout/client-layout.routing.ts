import { Routes } from '@angular/router';

import { EditClientComponent } from '../../manageClients/editClient/editClient.component';

import { BillingComponent } from '../../manageBilling/billing/billing.component';
import { PrebillingComponent } from 'app/manageBilling/prebilling/prebilling.component';

import { AppointmentsComponent } from '../../manageAppointments/appointments/appointments.component';
import { NewAppointmentsComponent } from 'app/manageAppointments/newAppointment/newappointment.component';
import { ModifyAppointmentsComponent } from 'app/manageAppointments/modifyAppointments/modifyappointment.component';


export const ClientLayoutRoutes: Routes = [
    /*{ path: 'home',           component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'clients',         component: ClientsComponent },
    { path: 'add-client',      component: AddClientComponent },*/
    { path: 'edit-client',     component: EditClientComponent },

    /*{ path: 'workers',         component: WorkersComponent },
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
    { path: 'edit-service',    component: EditServiceComponent},*/

    { path: 'billing',         component: BillingComponent },
    { path: 'pre-billing',       component:PrebillingComponent},

    { path: 'appointments',      component: AppointmentsComponent },
    { path: 'add-appointment',    component:NewAppointmentsComponent},
    { path: 'edit-appointment', component:ModifyAppointmentsComponent},
];