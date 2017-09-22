import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IVisitors } from './visitors';
import { GeneralVisitorsAnswers } from './generalvisitorsanswers';


@Injectable()
export class CoursesListService {   
    options: RequestOptions;
    public token: string;

    public  formUrl: string;
    constructor(private _http: Http) {

        const headers = new Headers();

        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        this.options = new RequestOptions({ headers: headers });

        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;

    }

    getVisitors(body: string): Observable<IVisitors[]> {   
      // return this._http.get('http://localhost:8080/DevipuramPhalcon/api/api/visitors/' + body)
        return this._http.get('http://localhost:8080/LaravelProject/public/api/visitorslist/' + body + '?token=' + this.token)
            .map((response: Response) => <IVisitors[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    //getGeneralVisitorAn(id: number,formtype:number): Observable<GeneralVisitorsAnswers[]> {
    //    return this._http.get('http://localhost:8080/DevipuramPhalcon/api/api/formanswers/' + id + '/' + formtype)
    //        .map((response: Response) => <GeneralVisitorsAnswers[]>response.json())
    //        .do(data => console.log('All: ' + JSON.stringify(data)))
    //        .catch(this.handleError);
    //}

    getCourseAnswers(id: number, formtype: number): Observable<any> {
         
        if (formtype == 1)
        {
            this.formUrl = 'http://localhost:8080/LaravelProject/public/api/generalvisitorsanswerslist/';
        }
        else if (formtype == 2)
        {
            this.formUrl = 'http://localhost:8080/LaravelProject/public/api/generalvisitorsinteranswerslist/';
        }
        else if (formtype == 3)
        {
            this.formUrl = 'http://localhost:8080/LaravelProject/public/api/svcanswerlist/';
        }
        else if (formtype == 4)
        {
            this.formUrl = 'http://localhost:8080/LaravelProject/public/api/srimahameruanswerslist/';
        }

        return this._http.get(this.formUrl + id)
            .map((response: Response) => <any>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);

        //return this._http.get('http://localhost:8080/DevipuramPhalcon/api/api/formanswers/' + id + '/' + formtype)
        //    .map((response: Response) => <any>response.json())
        //    .do(data => console.log('All: ' + JSON.stringify(data)))
        //    .catch(this.handleError);
    }

    private handleError(error: Response) {
       // console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}