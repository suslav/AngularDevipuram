import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesListComponent } from './courseslist.component';
import { GeneralVisitorAnComponent } from './generalvisitoran.component';
import { GeneralVisitorInAnComponent } from './generalvisitorinan.component';
import { SrimahameruAnComponent } from './srimahameruan.component';
import { SriVidyaCourseAnComponent } from './srividyacoursean.component';
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
                    { path: '', component: CoursesListComponent, canActivate: [AuthGuard]},
                    { path: ':id/1', component: GeneralVisitorAnComponent, canActivate: [AuthGuard] },
                    { path: ':id/2', component: GeneralVisitorInAnComponent, canActivate: [AuthGuard]},
                    { path: ':id/3', component: SriVidyaCourseAnComponent, canActivate: [AuthGuard]},
                    { path: ':id/4', component: SrimahameruAnComponent, canActivate: [AuthGuard]}
                ]
            },

        ])
    ],   
    declarations: [
        CoursesListComponent,  
        GeneralVisitorAnComponent,
        GeneralVisitorInAnComponent,
        SrimahameruAnComponent,
        SriVidyaCourseAnComponent
    ],
    providers: [
        CoursesListService
        //, SriVidyaResolver
    ]
})
export class CoursesListModule { }
