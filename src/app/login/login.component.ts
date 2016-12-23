import { Component } from '@angular/core'
import { AuthenticateService } from '../service/authenticate.service'

@Component ({
    selector: 'my-app',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AuthenticateService]
})

export class LoginComponent{
    constructor(private auth: AuthenticateService){}
    onSubmit(form){
       //console.log(form.controls.username.value);
       this.auth.authenticateUser(form.controls.username.value,form.controls.password.value)
       .subscribe(data => {    
           console.log('console...' + data['token']);    
           localStorage.setItem('currentUser',data['token']);
           console.log('localstorage...' + localStorage.getItem('currentUser'));
           
       });
       

    }
}

