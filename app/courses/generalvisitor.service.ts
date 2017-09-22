import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 
@Injectable()
export class GeneralVisitorService {

    options: RequestOptions;
    public token: string;
    //public usertype: string;
    public userid: string;
    constructor(private http: Http) {
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        this.options = new RequestOptions({ headers: headers });
        
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        //this.usertype = currentUser && currentUser.usertype;
        this.userid = currentUser && currentUser.userid;
    }

    insertGeneralvisitors(body: string) {
        //let jsbody2 = { "GVAnswer": body, "UserID": this.token };
        //let jsbody = JSON.stringify(jsbody2);       
        //return this.http.post('http://localhost:8080/DevipuramPhalcon/api/api/generalvisitorsanswersinsert', jsbody, this.options).map((res: Response) => res.json());

        let jsbody2 = {"GVAnswer": body, "UserID": this.userid};
        let jsbody = JSON.stringify(jsbody2);
        return this.http.post('http://localhost:8080/LaravelProject/public/api/generalvisitorsanswers/store?token=' + this.token, jsbody, this.options).map((res: Response) => res.json());
    }

    insertGeneralvisitorInterna(body: string) {
        let jsbody2 = { "GVIAnswer": body, "UserID": this.userid };
        let jsbody = JSON.stringify(jsbody2);
       // return this.http.post('http://localhost:8080/DevipuramPhalcon/api/api/generalvisitorsinteranswersinsert', jsbody, this.options).map((res: Response) => res.json());

        return this.http.post('http://localhost:8080/LaravelProject/public/api/generalvisitorsinteranswers/store?token=' + this.token, jsbody, this.options).map((res: Response) => res.json());
    }

    insertSvcAnswer(body: string) {
        let jsbody2 = { "SVCAnswer": body, "UserID": this.userid };
        let jsbody = JSON.stringify(jsbody2);        
       // return this.http.post('http://localhost:8080/DevipuramPhalcon/api/api/svcanswerinsert', jsbody, this.options).map((res: Response) => res.json());
        return this.http.post('http://localhost:8080/LaravelProject/public/api/svcanswer/store?token=' + this.token, jsbody, this.options).map((res: Response) => res.json());
    }

    insertSriMahameru(body: string) {
        let jsbody2 = { "SMMAnswer": body, "UserID": this.userid };
        let jsbody = JSON.stringify(jsbody2);      
        //return this.http.post('http://localhost:8080/DevipuramPhalcon/api/api/srimahameruanswersinsert', jsbody, this.options).map((res: Response) => res.json());
        return this.http.post('http://localhost:8080/LaravelProject/public/api/srimahameruanswers/store?token=' + this.token, jsbody, this.options).map((res: Response) => res.json());
    }     

}