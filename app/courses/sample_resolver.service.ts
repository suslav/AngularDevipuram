import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { SampleService } from './sample.service';
import { ISample } from './sample';

@Injectable()
export class SampleResolver implements Resolve<ISample> 
{
    constructor(private productService: SampleService,
        private router: Router) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISample>
    {

        return Observable.of(null);

        //let id = route.params['id'];   
        //if (isNaN(+id)) {
        //    console.log(`Product id was not a number: ${id}`);
        //    this.router.navigate(['/courses']);
        //    return Observable.of(null);
        //}
        //return this.productService.getProduct(+id)
        //    .map(product => {
        //        if (product) {
        //            return product;
        //        }
        //        console.log(`Product was not found: ${id}`);
        //        this.router.navigate(['/courses']);
        //        return null;
        //    })
        //    .catch(error => {
        //        console.log(`Retrieval error: ${error}`);
        //        this.router.navigate(['/courses']);
        //        return Observable.of(null);
        //    });

    }
}