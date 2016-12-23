import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';
import { RouterModule }       from '@angular/router';
import { ImagesModule }       from './images/images.module';
import { NotFoundModule }     from './notFound/notFound.module';

import { AppComponent }       from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent }     from './login/login.component'
import { DashboardModule}     from './dashboard/dashboard.module'
import { LoginModule }        from './login/login.module'

import { routing }            from './app.routing';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DashboardModule,
    LoginModule,
    ImagesModule,
    NotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
