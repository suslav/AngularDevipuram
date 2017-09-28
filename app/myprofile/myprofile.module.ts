import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MyProfileComponent } from './myprofile.component'; 
import { EditMyProfileComponent } from './editmyprofile.component'; 
import { ChangePasswordComponent } from './changepassword.component'; 
import { MyProfileService } from './myprofile.service'; 
import { AuthGuard } from '../_guards/index';

  
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
          {
              path: 'user',             
              children: [                                                 
                  {
                      path: 'myprofile', component: MyProfileComponent, canActivate: [AuthGuard]
                  },
                  {
                      path: 'editprofile', component: EditMyProfileComponent, canActivate: [AuthGuard]
                  }, 
                   {
                       path: 'changepassword', component: ChangePasswordComponent, canActivate: [AuthGuard]
                  } 
              ]
          },
         
      ])
    ], 
  declarations: [
      MyProfileComponent,
      EditMyProfileComponent,
      ChangePasswordComponent
  ],
  providers: [
      MyProfileService
  ]
})
export class MyProfileModule {}
