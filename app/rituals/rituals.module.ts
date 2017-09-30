import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RitualComponent } from './rituals.component'; 
import { BookRitualComponent } from './bookritual.component'; 
import { MyBookRitualComponent } from './mybookritual.component'; 
import { RitualsInsertComponent } from './ritualsinsert.component'; 
import { RitualsListComponent } from './ritualslist.component'; 
import { RitualsDisplayComponent } from './ritualsdisplay.component'; 
import { RitualsService } from './rituals.service'; 
import { AuthGuard } from '../_guards/index';
import { MyDatePickerModule } from 'mydatepicker';
  
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MyDatePickerModule,
        RouterModule.forChild([
          {
              path: 'ritual',             
              children: [                                                 
                  {
                      path: 'list', component: RitualComponent
                      //, canActivate: [AuthGuard]
                  },
                  {
                      path: 'bookritual/:id', component: BookRitualComponent, canActivate: [AuthGuard]
                  },
                  {
                      path: 'myrequests', component: MyBookRitualComponent, canActivate: [AuthGuard]
                  } 
                  ,
                  {
                      path: 'insert', component: RitualsInsertComponent, canActivate: [AuthGuard]
                  } 
                  ,
                  {
                      path: 'listbydate', component: RitualsListComponent, canActivate: [AuthGuard]
                  } 
                  ,
                  {
                      path: 'display/:rid', component: RitualsDisplayComponent, canActivate: [AuthGuard]
                  } 
              ]
          },
         
      ])
    ], 
  declarations: [
      RitualComponent   
      , BookRitualComponent
      , MyBookRitualComponent
      , RitualsInsertComponent
      , RitualsListComponent
      , RitualsDisplayComponent
  ],
  providers: [
      RitualsService
  ]
})
export class RitualsModule {}
