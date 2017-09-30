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

    ritualsList(): Observable<any> {
        return this.http.get('http://localhost:8080/LaravelProject/public/api/ritualslist')
            .map((response: Response) => <any>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    
    ritualsListbyId(): Observable<any> {
        return this.http.get('http://localhost:8080/LaravelProject/public/api/requstritualslist/' + this.userid + '?token=' + this.token)
            .map((response: Response) => <any>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    BookRitual(body: string) {         
        let jsbody = JSON.stringify(body);         
        return this.http.post('http://localhost:8080/LaravelProject/public/api/bookritual/store?token=' + this.token, jsbody, this.options).map((res: Response) => res.json());
    }

    ritualcategoriesList(): Observable<any> {
        return this.http.get('http://localhost:8080/LaravelProject/public/api/ritualcategoriesList')
            .map((response: Response) => <any>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    insertRituals(body: string) {          
        return this.http.post('http://localhost:8080/LaravelProject/public/api/rituals/store?token=' + this.token, body, this.options).map((res: Response) => res.json());
    }    

    getRitualsbydate(date: string): Observable<any> {       
        return this.http.get('http://localhost:8080/LaravelProject/public/api/ritualslistdate/' + date + '?token=' + this.token)
            .map((response: Response) => <any>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    ritualsListbyBookritualID(id:number): Observable<any> {
        return this.http.get('http://localhost:8080/LaravelProject/public/api/bookritualbyid/' + id + '?token=' + this.token)
            .map((response: Response) => <any>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}