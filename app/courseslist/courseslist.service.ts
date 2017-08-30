import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IVisitors } from './visitors';
import { GeneralVisitorsAnswers } from './generalvisitorsanswers';


@Injectable()
export class CoursesListService {

  //  private _photoUrl = 'http://localhost:8080/DevipuramPhalcon/api/api/photoalbum';

    constructor(private _http: Http) { }

    getVisitors(body: string): Observable<IVisitors[]> {   
        return this._http.get('http://localhost:8080/DevipuramPhalcon/api/api/visitors/' + body)
            .map((response: Response) => <IVisitors[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getGeneralVisitorAn(id: number,formtype:number): Observable<GeneralVisitorsAnswers[]> {
        return this._http.get('http://localhost:8080/DevipuramPhalcon/api/api/formanswers/' + id + '/' + formtype)
            .map((response: Response) => <GeneralVisitorsAnswers[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
       // console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}