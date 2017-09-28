import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesListComponent } from './courseslist.component';
import { GeneralVisitorAnComponent } from './generalvisitoran.component';
import { GeneralVisitorInAnComponent } from './generalvisitorinan.component';
import { SrimahameruAnComponent } from './srimahameruan.component';  
import { SriVidyaRegisterAnComponent } from './srividyaregisteran.component';

import { UserGeneralVisitorAnComponent } from './usergeneralvisitoran.component';
import { UserGeneralVisitorInAnComponent } from './usergeneralvisitorinan.component';
import { UserSrimahameruAnComponent } from './usersrimahameruan.component';
import { UserSriVidyaRegisterAnComponent } from './usersrividyaregisteran.component';

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
                    //{ path: ':id/1', component: GeneralVisitorAnComponent, canActivate: [AuthGuard] },
                    //{ path: ':id/2', component: GeneralVisitorInAnComponent, canActivate: [AuthGuard]},
                    //{ path: ':id/3', component: SriVidyaRegisterAnComponent, canActivate: [AuthGuard]},
                    //{ path: ':id/4', component: SrimahameruAnComponent, canActivate: [AuthGuard] },
                    { path: ':id/1/:uid', component: GeneralVisitorAnComponent, canActivate: [AuthGuard] },
                    { path: ':id/2/:uid', component: GeneralVisitorInAnComponent, canActivate: [AuthGuard] },
                    { path: ':id/3/:uid', component: SriVidyaRegisterAnComponent, canActivate: [AuthGuard] },
                    { path: ':id/4/:uid', component: SrimahameruAnComponent, canActivate: [AuthGuard] },


                    { path: 'useran/:id/1', component: UserGeneralVisitorAnComponent, canActivate: [AuthGuard] },
                    { path: 'useran/:id/2', component: UserGeneralVisitorInAnComponent, canActivate: [AuthGuard]},
                    { path: 'useran/:id/3', component: UserSriVidyaRegisterAnComponent, canActivate: [AuthGuard]},
                    { path: 'useran/:id/4', component: UserSrimahameruAnComponent, canActivate: [AuthGuard] },

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

        , UserGeneralVisitorAnComponent
        , UserGeneralVisitorInAnComponent
        , UserSriVidyaRegisterAnComponent
        , UserSrimahameruAnComponent
    ],
    providers: [
        CoursesListService
        //, SriVidyaResolver
    ]
})
export class CoursesListModule { }
