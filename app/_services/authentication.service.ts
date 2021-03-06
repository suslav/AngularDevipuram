﻿import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Router } from '@angular/router';


//import { tokenNotExpired } from 'angular2-jwt';

import { tokenNotExpired } from 'angular2-jwt';



@Injectable()
export class AuthenticationService {
    public token: string;    
    constructor(private http: Http, private router: Router) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;       
    }

    login(username: string, password: string): Observable<boolean> {

        console.log(JSON.stringify({ UserName: username, Password: password }));
         return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
       // return this.http.post('http://localhost:8080/DevipuramPhalcon/api/api/userlogin', JSON.stringify({ UserName: username, Password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }


    // isLoggedIn(): boolean {
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


    isLoggedIn(): boolean {
         return !!localStorage.getItem('currentUser');      
       // return tokenNotExpired();
    }

    isAdmin(): boolean {       
        
        if (JSON.parse(localStorage.getItem('currentUser')) != null)
        {
            if (JSON.parse(localStorage.getItem('currentUser')).usertype == "1") {
                return true;
            }
            else {
                return false;
            }    
        }
        else {
            return false;
        }  
                    
    }

    isUser(): boolean {

        if (JSON.parse(localStorage.getItem('currentUser')) != null) {
            if (JSON.parse(localStorage.getItem('currentUser')).usertype == "2") {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }

    }
}