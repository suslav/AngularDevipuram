import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class RitualsService {
    options: RequestOptions;
    public token: string;
    public userid: string;

    constructor(private http: Http) {

        const headers = new Headers();

        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        this.options = new RequestOptions({ headers: headers });

        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        this.userid = currentUser && currentUser.userid;

    }

    
    ReplyDetailsbyId(id:number): Observable<any> {
        return this.http.get('http://localhost:8080/LaravelProject/public/api/replydetail/' + id + '?token=' + this.token)
            .map((response: Response) => <any>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    //Updatepassword(body: string) {
    //    let jsbody2 = { "password": body };
    //    let jsbody = JSON.stringify(jsbody2);                       
    //    return this.http.put('http://localhost:8080/LaravelProject/public/api/updatepassword/' + this.userid + '?token=' + this.token, jsbody, this.options).map((res: Response) => res.json());


    //}

    replyUser(body: string) {      
        let jsbody = JSON.stringify(body);     
        console.log(jsbody);
        return this.http.post('http://localhost:8080/LaravelProject/public/api/reply/store?token=' + this.token, jsbody, this.options).map((res: Response) => res.json());
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}