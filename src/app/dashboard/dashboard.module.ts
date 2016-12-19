import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { DashboardComponent } from './dashboard.component'
import { AppComponent } from '../app.component'

@NgModule ({
    declarations: [DashboardComponent],
    imports: [
        BrowserModule
    ],
   
})


export class DashboardModule {

}