import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
 
@Injectable()
export class LoginService {
    headers: Headers;
    options: RequestOptions;
 
    constructor(private http: Http) {
        //this.headers = new Headers({
        //    'Content-Type': 'application/json',
        //    'Accept': 'q=0.8;application/json;q=0.9'
        //});  


        //let headers = new Headers();
        //headers.append('Accept', 'application/json')
        //headers.append('Content-Type', 'application/json');

        //let options = new RequestOptions({ headers: headers, withCredentials: true });

      //  this.headers = new Headers({
       //     'Access-Control-Allow-Origin': '*',
        //    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        //    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Range, Content-Disposition, Content-Type, Authorization',
        //    'Access-Control-Allow-Credentials': true
       // });

        //this.options = new RequestOptions({ headers: this.headers, withCredentials: true});

        const headers = new Headers();

        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

        //headers.append('Access-Control-Allow-Headers', 'Content-Type');
        //headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        //headers.append('Access-Control-Allow-Origin', '*');

        
        this.options = new RequestOptions({ headers: headers, withCredentials: true});

       
    }


    getDataObservable(url: string) {
        console.log(url)
        return this.http.get(url, this.options)
            .map(data => {
                data;
                console.log("I CAN SEE DATA HERE: ", data);
            });
    }


    loginService(url: string, param: any): Observable<any> {

        console.log(param);

        return this.http.post(url, param, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }   
     
    //createService(url: string, param: any): Observable<any> {

    //    console.log(param);
 
    //    return this.http.post(url, param, this.options)
    //        .map(this.extractData)
    //        .catch(this.handleError);
    //}   

    private extractData(res: Response) {
        //let body = res.json();
        let body = res;
        return body || {};
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    } 
}