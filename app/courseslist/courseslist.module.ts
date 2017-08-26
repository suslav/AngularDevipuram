import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesListComponent } from './courseslist.component';
import { AuthGuard } from '../_guards/index';

import { CoursesListService } from './courseslist.service';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
    imports: [
        CommonModule,
        //FormsModule,        
        ReactiveFormsModule,    
        MyDatePickerModule,
        RouterModule.forChild([
            {
                path: 'courseslist',
                children: [
                    { path: '', component: CoursesListComponent, canActivate: [AuthGuard] }                    
                ]
            },

        ])
    ],   
    declarations: [
        CoursesListComponent,       
    ],
    providers: [
        CoursesListService
        //, SriVidyaResolver
    ]
})
export class CoursesListModule { }
