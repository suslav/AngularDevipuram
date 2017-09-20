import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './events.component'; 
import { EventsInsertComponent } from './eventsinsert.component'; 
import { EventsDisplayComponent } from './eventsdisplay.component'; 
import { EventsService } from './events.service'; 
import { AuthGuard } from '../_guards/index';

  
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
          {
              path: 'events',             
              children: [                                
                  {
                      path: 'insert', component: EventsInsertComponent, canActivate: [AuthGuard]
                  }
                  ,
                  {
                      path: 'list', component: EventsComponent
                  },
                  {
                      path: 'display/:id', component: EventsDisplayComponent
                  }  
              ]
          },
         
      ])
    ], 
  declarations: [
      EventsComponent,
      EventsInsertComponent
     ,EventsDisplayComponent
  ],
  providers: [
      EventsService
  ]
})
export class EventsModule {}
