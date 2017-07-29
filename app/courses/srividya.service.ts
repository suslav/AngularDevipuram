import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { SvcAnswer } from './svcanswer';

@Injectable()
export class SriVidyaService {
    private baseUrl = 'api/srividya';

    constructor(private http: Http) { }

    getProducts(): Observable<SvcAnswer[]> {
        return this.http.get(this.baseUrl)
            .map(this.extractData)
            .do(data => console.log('getProducts: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<SvcAnswer> {
        if (id === 0) {
            return Observable.of(this.initializeProduct());
        };
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .do(data => console.log('getProduct: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    deleteProduct(id: number): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}/${id}`;
        return this.http.delete(url, options)
            .do(data => console.log('deleteProduct: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveProduct(product: SvcAnswer): Observable<SvcAnswer> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (product.SVCAnswerID === 0) {
            return this.createProduct(product, options);
        }
        return this.updateProduct(product, options);
    }

    private createProduct(product: SvcAnswer, options: RequestOptions): Observable<SvcAnswer> {
        product.SVCAnswerID = undefined;
        return this.http.post(this.baseUrl, product, options)
            .map(this.extractData)
            .do(data => console.log('createProduct: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private updateProduct(product: SvcAnswer, options: RequestOptions): Observable<SvcAnswer> {
        const url = `${this.baseUrl}/${product.SVCAnswerID}`;
        return this.http.put(url, product, options)
            .map(() => product)
            .do(data => console.log('updateProduct: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    private handleError(error: Response): Observable<any> {        
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    initializeProduct(): SvcAnswer {
        // Return an initialized object
        return {
            SVCAnswerID: 0,
            SVCAnswer: null,
            SVCQuestionID: null,
            VisitorFormID: null,
            //tags: [],
            //releaseDate: null,
            //price: null,
            //description: null,
            //starRating: null,
            //imageUrl: null
        };
    }
}
