import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IPhoto } from './photoalbum';


@Injectable()
export class PhotoGalleryService {

    private _photoUrl = 'http://localhost:8080/DevipuramPhalcon/api/api/photoalbum';

    constructor(private _http: Http) { }

    getPhotos(): Observable<IPhoto[]> {
        return this._http.get(this._photoUrl)
            .map((response: Response) => <IPhoto[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}