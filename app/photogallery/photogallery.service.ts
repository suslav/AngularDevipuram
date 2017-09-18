import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PhotoGalleryService {

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

    insertPhotos(body: string) {       
        return this.http.post('http://localhost:8080/LaravelProject/public/api/photoalbum/store?token=' + this.token, body, this.options).map((res: Response) => res.json());
    }  


    photosList(): Observable<any> {
        return this.http.get('http://localhost:8080/LaravelProject/public/api/photoalbums')
            .map((response: Response) => <any>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    photoDetailbyId(id: number): Observable<any> {
        return this.http.get('http://localhost:8080/LaravelProject/public/api/photodisplay/' + id)
            .map((response: Response) => <any>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }


    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}