import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/index';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    pageTitle: string = 'Devipuram';
    constructor(private router: Router, private authService: AuthenticationService) { }


    //isLoggedIn(): boolean {
    //    if (localStorage.getItem('currentUser')) {
    //        // logged in so return true
    //        return true;
    //    }
    //    else
    //    {
    //        // not logged in so redirect to login page
    //        this.router.navigate(['/login']);
    //        return false;
    //    }         
    //}

    logOut(): void {
        this.authService.logout();
        console.log('Log out');
        this.router.navigateByUrl('/login');
    }
}