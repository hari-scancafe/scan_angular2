import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class AuthenticateService {
    private _url = 'https://pg-engine-dev.herokuapp.com/api/v1/token/';
    private headers;
    private options;
    constructor (private http: Http) {
        this.headers = new Headers();
        this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
        this.headers.append('Access-Control-Allow-Methods', 'GET');
        this.headers.append('Access-Control-Allow-Origin', '*');
       
        this.options = new RequestOptions({ headers: this.headers });
    }

    testApiEngine(): Observable<JSON> {
        return this.http.get(this._url, this.options)
                .map(res => { 
                    return res.json()                     
                });  
    }

    authenticateUser(user,pass): Observable<JSON> {
         var creds = JSON.stringify({username: user, password : pass});
        
         var header = new Headers();
         header.append('Content-Type', 'application/json');
         return this.http.post(this._url, creds, {headers: header})
                .map(res => {
                    return res.json()
                });
    }
}