
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent, SignupComponent } from './login/index';
import { AuthGuard } from './_guards/index';

import { HomeComponent } from './home/index';
import { DevipuramComponent } from './devipuram/devipuram.component';
import { GurujiComponent } from './guruji/guruji.component';
//import { ArticlesComponent } from './articles/articles.component';
import { CampusEventsComponent } from './campusevents/campusevents.component';
import { ContactComponent } from './contact/contact.component';
import { DailyscheduleComponent } from './dailyschedule/dailyschedule.component';
import { SrividyaComponent } from './srividya/srividya.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent },        
            { path: 'signup', component: SignupComponent },        
            { path: 'home', component: HomeComponent},
            { path: 'devipuram', component: DevipuramComponent },
            { path: 'guruji', component: GurujiComponent },
         //   { path: 'articles', component: ArticlesComponent },
            { path: 'campusevents', component: CampusEventsComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'dailyschedule', component: DailyscheduleComponent },
            { path: 'srividya', component: SrividyaComponent },          
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})


export class AppRoutingModule {
  
}