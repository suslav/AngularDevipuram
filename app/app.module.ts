import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BaseRequestOptions } from '@angular/http';
import { AppComponent }  from './app.component';
import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { LoginComponent, LoginService, SignupComponent, SignupService } from './login/index';
import { HomeComponent } from './home/index';
//newadd
import { AppRoutingModule } from './app-routing.module';
import { DevipuramComponent } from './devipuram/devipuram.component';
import { GurujiComponent } from './guruji/guruji.component';
//import { ArticlesComponent } from './articles/articles.component';
import { CampusEventsComponent } from './campusevents/campusevents.component';
import { ContactComponent } from './contact/contact.component';
import { DailyscheduleComponent } from './dailyschedule/dailyschedule.component';
import { SrividyaComponent } from './srividya/srividya.component';
import { PageNotFoundComponent } from './page-not-found.component'; 
import { CoursesModule } from './courses/courses.module'; 
import { CoursesListModule } from './courseslist/courseslist.module'; 
import { GeneralVisitorService } from './courses/generalvisitor.service';  
import { ProductsModule } from './shoppingcart/products.module';
import { VideosModule } from './videogallery/videos.module'; 
import { PhotoModule } from './photogallery/photo.module'; 
import { ArticlesModule } from './articles/articles.module'; 
import { EventsModule } from './events/events.module'; 
import { MyProfileModule } from './myprofile/myprofile.module'; 
import { ReplyModule } from './replys/reply.module'; 
import { SrividyaCourseModule } from './srividyacourses/srividyacourse.module'; 

@NgModule({
    imports: [
        BrowserModule,
      // FormsModule,
        ReactiveFormsModule,    
        HttpModule,    
        CoursesModule  
        , CoursesListModule
        , ProductsModule
        , VideosModule
        , PhotoModule
        , ArticlesModule
        , EventsModule
        , MyProfileModule
        , ReplyModule
        , SrividyaCourseModule
        , AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        HomeComponent,
        DevipuramComponent,
        GurujiComponent,
       // ArticlesComponent,
        CampusEventsComponent,
        ContactComponent,
        DailyscheduleComponent,
        SrividyaComponent,
        PageNotFoundComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        LoginService,
        SignupService,
        GeneralVisitorService,      
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }