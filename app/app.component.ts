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

    logOut(): void {
        this.authService.logout();
        console.log('Log out');
        this.router.navigateByUrl('/login');
    }
}