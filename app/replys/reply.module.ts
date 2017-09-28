import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReplysComponent } from './replys.component'; 
//import { EditMyProfileComponent } from './editmyprofile.component'; 
//import { ChangePasswordComponent } from './changepassword.component'; 
import { ReplyService } from './reply.service'; 
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
                      path: ':vid/:uid', component: ReplysComponent, canActivate: [AuthGuard]
                  }
                  //,
                  //{
                  //    path: 'editprofile', component: EditMyProfileComponent, canActivate: [AuthGuard]
                  //}, 
                  // {
                  //     path: 'changepassword', component: ChangePasswordComponent, canActivate: [AuthGuard]
                  //} 
              ]
          },
         
      ])
    ], 
  declarations: [
      ReplysComponent
      //,EditMyProfileComponent,
      //ChangePasswordComponent
  ],
  providers: [
      ReplyService
  ]
})
export class ReplyModule {}
