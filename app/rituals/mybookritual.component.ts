import { Component, OnInit} from '@angular/core' 
import { RitualsService } from './rituals.service';
  
@Component({  
    templateUrl: './app/rituals/mybookritual.component.html'
})
export class MyBookRitualComponent implements OnInit {

   public bookritual: any;
    errorMessage: string;

    
    constructor(private _rituService: RitualsService) {

    }

    ngOnInit(): void {

        this._rituService.ritualsListbyId().subscribe(
            bookrituals => {
                if (bookrituals.length > 0) {
                    this.errorMessage = " ";
                    return this.bookritual = bookrituals;
                }
                else {
                    this.bookritual = null;
                    return this.errorMessage = "There are no Requested Rituals";
                }

            },
            error => {
                //return this.errorMessage = <any>error;
            }
        );

    }
     
} 
