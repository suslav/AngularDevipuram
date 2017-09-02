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
        //this._courselistService.getVisitors(event.formatted).subscribe(visitors => this.visitors = visitors,
        //    error => this.errorMessage = <any>error);
        
            this._courselistService.getVisitors(event.formatted).subscribe(
                visitors => {
                    if (visitors.length > 0)
                    {
                        this.errorMessage = " ";
                        return this.visitors = visitors;                      
                    }
                    else
                    {
                        this.visitors = null;
                        return this.errorMessage = "There are no Registrations on the selected date";
                    }
                    
                },
                error => {
                    //return this.errorMessage = <any>error;
                }
            );
    }
} 