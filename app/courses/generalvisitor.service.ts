import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 
//import 'rxjs/add/observable/of';
//import 'rxjs/add/observable/throw';
 
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';
//import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/filter';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/switchMap';

@Injectable()
export class GeneralVisitorService {
    options: RequestOptions;

    public token: string;

    constructor(private http: Http) {

        const headers = new Headers();

        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        this.options = new RequestOptions({ headers: headers });



        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    insertGeneralvisitors(body: string) {
         let jsbody = JSON.stringify(body);
       // let jsbody = body;
        console.log(jsbody);
        return this.http.post('http://localhost:8080/DevipuramPhalcon/api/api/generalvisitorsanswersinsert', jsbody, this.options).map((res: Response) => res.json());
    }

    insertGeneralvisitorInterna(body: string) {
        let jsbody = JSON.stringify(body);
        // let jsbody = body;
        console.log(jsbody);
        return this.http.post('http://localhost:8080/DevipuramPhalcon/api/api/generalvisitorsinteranswersinsert', jsbody, this.options).map((res: Response) => res.json());
    }

    insertSvcAnswer(body: string) {
        let jsbody = JSON.stringify(body);
        // let jsbody = body;
        console.log(jsbody);
        return this.http.post('http://localhost:8080/DevipuramPhalcon/api/api/svcanswerinsert', jsbody, this.options).map((res: Response) => res.json());
    }

    insertSriMahameru(body: string) {
        let jsbody = JSON.stringify(body);
        // let jsbody = body;
        console.log(jsbody);
        return this.http.post('http://localhost:8080/DevipuramPhalcon/api/api/srimahameruanswersinsert', jsbody, this.options).map((res: Response) => res.json());
    }

    
    //private extractData(res: Response) {
    //    //let body = res.json();
    //    let body = res;
    //    return body || {};
    //}

    //private handleError(error: Response) {
    //    console.error(error);
    //    return Observable.throw(error.json().error || 'Server error');
    //}
}