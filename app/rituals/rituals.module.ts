import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { ReplysComponent } from './replys.component'; 
//import { ReplyService } from './reply.service'; 
import { AuthGuard } from '../_guards/index';

  
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
          {
              path: 'reply',             
              children: [                                                 
                  {
                   //   path: ':vid/:uid', component: ReplysComponent, canActivate: [AuthGuard]
                  }                  
              ]
          },
         
      ])
    ], 
  declarations: [
    //  ReplysComponent     
  ],
  providers: [
     // ReplyService
  ]
})
export class RitualsModule {}
