import {  PipeTransform, Pipe } from '@angular/core';
import { ISample } from './sample';

@Pipe({
    name: 'productFilter'
})
export class SampleFilterPipe implements PipeTransform {

    transform(value: ISample[], filterBy: string): ISample[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((product: ISample) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
