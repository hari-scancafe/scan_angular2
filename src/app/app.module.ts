import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent } from './login/login.component'
import { DashboardModule} from './dashboard/dashboard.module'
import { LoginModule } from './login/login.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent  
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]),
    DashboardModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
