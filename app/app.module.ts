import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend

import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
//import { routing }        from './app.routing';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';


//newadd
import { AppRoutingModule } from './app-routing.module';
import { DevipuramComponent } from './devipuram/devipuram.component';
import { GurujiComponent } from './guruji/guruji.component';
import { ArticlesComponent } from './articles/articles.component';
import { CampusEventsComponent } from './campusevents/campusevents.component';
import { VideoGalleryComponent } from './videogallery/videogallery.component';
import { ContactComponent } from './contact/contact.component';
import { DailyscheduleComponent } from './dailyschedule/dailyschedule.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { SrividyaComponent } from './srividya/srividya.component';
import { PageNotFoundComponent } from './page-not-found.component';
//import { CoursesComponent } from './courses/courses.component';


import { CoursesModule } from './courses/courses.module';
//import { ProductModule } from './products/product.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
       // routing        
        CoursesModule
       // , ProductModule
        ,AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        DevipuramComponent,
        GurujiComponent,
        ArticlesComponent,
        CampusEventsComponent,
        VideoGalleryComponent,
        ContactComponent,
        DailyscheduleComponent,
        PhotogalleryComponent,
        SrividyaComponent,
        PageNotFoundComponent
        //,CoursesComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }