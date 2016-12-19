import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthenticateService {
    constructor (http: Http) {}
    authenticateUser():Observable<JSON> {
        return http.get('/app/food.json')
                .map((res:Response) => res.json())
                .subscribe();
    }
}