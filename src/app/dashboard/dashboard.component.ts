import { Component } from '@angular/core'

@Component ({
    selector: '<dashboard></dashboard>',
    template: `
        <h2>DashBoard</h2>
        <div class="container">
            <div class="row">
                <div class="col-md-4"></div>
            </div>
               <div class="row">
                <div class="col-md-4"></div>
            </div>
               <div class="row">
                <div class="col-md-4"></div>
            </div>
               <div class="row">
                <div class="col-md-4"></div>
            </div>
               <div class="row">
                <div class="col-md-4"></div>
            </div>
               <div class="row">
                <div class="col-md-4"></div>
            </div>
               <div class="row">
                <div class="col-md-4"></div>
            </div>
               <div class="row">
                <div class="col-md-4"></div>
            </div>
               <div class="row">
                <div class="col-md-4"></div>
            </div>
        </div>       
        `,
    styles: [
        `
          div.row {
            width: 200px;
            height: 200px;
            background-color: #f5f1f1;
            margin: 2px 2px 2px 2px;
            float: left;
          }
        `  
    ]
})

export class DashboardComponent {
    
}