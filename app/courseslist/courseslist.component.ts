import { Component, OnInit} from '@angular/core'
import { IVisitors } from './visitors';
import { CoursesListService } from './courseslist.service';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';

@Component({  
    templateUrl: './app/courseslist/courseslist.component.html'
})
export class CoursesListComponent implements OnInit {
    visitors: IVisitors[];
    errorMessage: string;

    private myDatePickerOptions: IMyDpOptions = {
       // dateFormat: 'dd.mm.yyyy',
        dateFormat: 'yyyy-mm-dd',
    };
   
    constructor(private _courselistService: CoursesListService) {

    }

    ngOnInit(): void {
        //this._courselistService.getVisitors().subscribe(visitors => this.visitors = visitors,
        //    error => this.errorMessage = <any>error);

    }

    onDateChanged(event: IMyDateModel) {

        console.log(event.formatted);

       // let param = event.formatted;

        this._courselistService.getVisitors(event.formatted).subscribe(visitors => this.visitors = visitors,
            error => this.errorMessage = <any>error);

    }
} 