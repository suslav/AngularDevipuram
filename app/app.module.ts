import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend

//import { fakeBackendProvider } from './_helpers/index';
//import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
//import { routing }        from './app.routing';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { LoginComponent, LoginService, SignupComponent, SignupService } from './login/index';
import { HomeComponent } from './home/index';
//import { LoginService } from './login/login.service';


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
import { PhotoGalleryService } from './photogallery/photogallery.service';
import { SrividyaComponent } from './srividya/srividya.component';
import { PageNotFoundComponent } from './page-not-found.component';
//import { ShoppingCart1Component } from './shoppingcart/shoppingcart1.component';
 
import { CoursesModule } from './courses/courses.module'; 

//import { ShoppingcartModule } from './shoppingcart/shoppingcart.module'; 

import { ProductsModule } from './shoppingcart/products.module';

// import { BrowserXhr } from '@angular/http';
 //import {CustExtBrowserXhr} from './cust-ext-browser-xhr';
// import { provide } from '@angular/core';

@NgModule({
    imports: [
        BrowserModule,
      // FormsModule,
          ReactiveFormsModule,
        HttpModule,    
        CoursesModule  
      //  ,ShoppingcartModule
        ,ProductsModule
        ,AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
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
     //   ShoppingCart1Component,
        PageNotFoundComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        LoginService,
        SignupService,
        PhotoGalleryService,
        // providers used to create fake backend
      //  fakeBackendProvider,
     //   MockBackend,
        BaseRequestOptions
      //  , { provide: BrowserXhr, useClass: CustExtBrowserXhr }
    ],
    bootstrap: [AppComponent
//,[provide(BrowserXhr,{useClass:CustExtBrowserXhr})]
]
})

export class AppModule { }