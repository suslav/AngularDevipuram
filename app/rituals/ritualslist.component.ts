import { Component, OnInit} from '@angular/core'
import { RitualsService } from './rituals.service';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';

@Component({  
    templateUrl: './app/rituals/ritualslist.component.html'
})
export class RitualsListComponent implements OnInit {
    public rituals: any;
    errorMessage: string;

    private myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'yyyy-mm-dd',
    };
   
    constructor(private _rituaService: RitualsService) {

    }

    ngOnInit(): void {
        
    }

    onDateChanged(event: IMyDateModel) {       
        
        this._rituaService.getRitualsbydate(event.formatted).subscribe(
            rituals => {
                if (rituals.length > 0)
                    {
                        this.errorMessage = " ";
                        return this.rituals = rituals;                      
                    }
                    else
                    {
                    this.rituals = null;
                        return this.errorMessage = "There are no Booked Rituals on the selected date";
                    }
                    
                },
                error => {
                    //return this.errorMessage = <any>error;
                }
            );
    }
} 