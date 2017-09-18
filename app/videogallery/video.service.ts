import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class VideoService {
    options: RequestOptions;

    public token: string;

    constructor(private http: Http) {

        const headers = new Headers();

        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        this.options = new RequestOptions({ headers: headers });
         
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
      //  this.usertype = currentUser && currentUser.usertype;
    }

    insertVideos(body: string) {
      //  let jsbody2 = { "GVAnswer": body, "UserID": this.token };
      //  let jsbody = JSON.stringify(body);     
        return this.http.post('http://localhost:8080/LaravelProject/public/api/videolist/store?token=' + this.token, body, this.options).map((res: Response) => res.json());
    }    

    videocategoriesList(): Observable<any> {
        return this.http.get('http://localhost:8080/LaravelProject/public/api/VideocategoriesList')
            .map((response: Response) => <any>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);          
    }

    videosList(): Observable<any> {
        return this.http.get('http://localhost:8080/LaravelProject/public/api/videoslist')
            .map((response: Response) => <any>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    videosListbyCatId(id: number): Observable<any> {
        return this.http.get('http://localhost:8080/LaravelProject/public/api/videoslist/' + id)
            .map((response: Response) => <any>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }


    videosDetailbyId(id: number): Observable<any> {
        return this.http.get('http://localhost:8080/LaravelProject/public/api/videodisplay/' + id)
            .map((response: Response) => <any>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}