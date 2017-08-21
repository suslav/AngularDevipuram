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
   // headers: Headers;
    options: RequestOptions;

     public token: string;
 
    constructor(private http: Http) {
         
        const headers = new Headers();

        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');     
      //   this.options = new RequestOptions({ headers: headers, withCredentials: true});
        this.options = new RequestOptions({ headers: headers });



        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
         this.token = currentUser && currentUser.token;       
    }


    loginUser(food: string) {   

         //let body = JSON.stringify(food);    
         //console.log(body);
         //return this.http.post('http://localhost:8080/DevipuramPhalcon/api/api/userlogin', body, this.options).map((res: Response) => res.json());
      
        let body = JSON.stringify(food);
        console.log(body);
        return this.http.post('http://localhost:8080/DevipuramPhalcon/api/api/userlogin', body, this.options).map((response: Response) => {

            console.log(response.json());
          //  console.log(body);

            let token = response.json() && response.json().id;
            if (token) {

                this.token = token;
                 
               // localStorage.setItem('currentUser', JSON.stringify({ username: "admin@gmail.com", token: token }));
                localStorage.setItem('currentUser', JSON.stringify({token: token }));

               //  return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
        });


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