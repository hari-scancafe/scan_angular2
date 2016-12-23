import {Router, RouterModule } from '@angular/router';

import { LoginComponent }      from './login/login.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { ImagesComponent }     from './images/images.component';
import { NotFoundComponent }   from './notFound/not-found.component';


export const routing = RouterModule.forRoot([
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', component: ImagesComponent},
    { path: '**', component: NotFoundComponent}
]);

