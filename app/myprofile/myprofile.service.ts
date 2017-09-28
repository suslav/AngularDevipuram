import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class MyProfileService {
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

    //ArticlesList(): Observable<any> {
    //    return this.http.get('http://localhost:8080/LaravelProject/public/api/articleslist')
    //        .map((response: Response) => <any>response.json())
    //        .do(data => console.log('All: ' + JSON.stringify(data)))
    //        .catch(this.handleError);
    //}

    UserDetailsbyId(): Observable<any> {
        return this.http.get('http://localhost:8080/LaravelProject/public/api/userlist/' + this.userid + '?token=' + this.token)
            .map((response: Response) => <any>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    Updatepassword(body: string) {
        let jsbody2 = { "password": body };
        let jsbody = JSON.stringify(jsbody2);               

        //return this.http.post('http://localhost:8080/LaravelProject/public/api/updateuser/' + this.userid + '?token=' + this.token, jsbody, this.options).map((res: Response) => res.json());

        return this.http.put('http://localhost:8080/LaravelProject/public/api/updatepassword/' + this.userid + '?token=' + this.token, jsbody, this.options).map((res: Response) => res.json());


    }

    UpdateUser(body: string) {
        //  let jsbody2 = { "GVIAnswer": body, "UserID": this.userid };
        let jsbody = JSON.stringify(body);

        //return this.http.post('http://localhost:8080/LaravelProject/public/api/updateuser/' + this.userid + '?token=' + this.token, jsbody, this.options).map((res: Response) => res.json());

        return this.http.put('http://localhost:8080/LaravelProject/public/api/updateuser/' + this.userid + '?token=' + this.token, jsbody, this.options).map((res: Response) => res.json());


    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}