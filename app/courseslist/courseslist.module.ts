import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesListComponent } from './courseslist.component';
import { GeneralVisitorAnComponent } from './generalvisitoran.component';
import { GeneralVisitorInAnComponent } from './generalvisitorinan.component';
import { SrimahameruAnComponent } from './srimahameruan.component';
//import { SriVidyaCourseAnComponent } from './srividyacoursean.component';

import { SriVidyaRegisterAnComponent } from './srividyaregisteran.component';

import { AuthGuard } from '../_guards/index';

import { CoursesListService } from './courseslist.service';
import { MyDatePickerModule } from 'mydatepicker';

import { UserCoursesListComponent } from './usercourseslist.component';

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
                    { path: ':id/3', component: SriVidyaRegisterAnComponent, canActivate: [AuthGuard]},
                    { path: ':id/4', component: SrimahameruAnComponent, canActivate: [AuthGuard] },
                    { path: 'user', component: UserCoursesListComponent, canActivate: [AuthGuard] }
                ]
            },

        ])
    ],   
    declarations: [
        CoursesListComponent,  
        GeneralVisitorAnComponent,
        GeneralVisitorInAnComponent,
        SrimahameruAnComponent,
        UserCoursesListComponent,
       // SriVidyaCourseAnComponent
        SriVidyaRegisterAnComponent
    ],
    providers: [
        CoursesListService
        //, SriVidyaResolver
    ]
})
export class CoursesListModule { }
