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
    options: RequestOptions;

    public token: string;
    public usertype: string;
 
    constructor(private http: Http) {       
         
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');     
        this.options = new RequestOptions({ headers: headers });
        
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token; 
        this.usertype = currentUser && currentUser.UserTypeID;
    }


    //getBooks(): Observable<any> {
    //    return this.http.get('http://localhost:8080/myNextProject/public/api/book?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9teU5leHRQcm9qZWN0L3B1YmxpYy9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTUwNDc4NTA4OCwiZXhwIjoxNTA0Nzg4Njg4LCJuYmYiOjE1MDQ3ODUwODgsImp0aSI6IkFncmp6Y1NqRVlnS296Z3EifQ.JTyqA84rbw_GGU_g-SFsKRjFT_vCGtGkTZf2X9eJaW0')
    //        .map((response: Response) => <any>response.json())
    //        .do(data => console.log('All: ' + JSON.stringify(data)))
    //        .catch(this.handleError);
    //}


    loginUser(food: string) {   
        
        let body = JSON.stringify(food);
        console.log(body);
       // return this.http.post('http://localhost:8080/DevipuramPhalcon/api/api/userlogin', body, this.options).map((response: Response) => {
       // return this.http.post('http://localhost:8080/myNextProject/public/api/auth/login', body, this.options).map((response: Response) => {
        return this.http.post('http://localhost:8080/LaravelProject/public/api/auth/login', body, this.options).map((response: Response) => {
            let token = response.json() && response.json().token;
            let usertype = response.json() && response.json().UserTypeID;
            let userid = response.json() && response.json().UserID;
            if (token && usertype) {
                this.token = token;
                this.usertype = usertype;                               
                localStorage.setItem('currentUser', JSON.stringify({ token: token, usertype: usertype, userid: userid}));
                return true;
            } else {
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


    //public generateNewToken() {
    //    let token: string = '...';//custom token generation;
    //    let currentTime: number = (new Date()).getTime() + ttl;
    //    this.store({ ttl: currentTime, token });
    //}
}