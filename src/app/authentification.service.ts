import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {  Observable } from 'rxjs';
import { Router } from '@angular/router';
import {User} from './user';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  
      uri = 'http://localhost:13000/api';
  private token: string;
public  currentUser :User; 
  regDataUser :{};
  constructor(private http: HttpClient,private router: Router ) {
  
    
   }
 
    login(userName: string, password: string): Observable<boolean> {
      return this.http.post<{token:string,role:string,userName:string,_id:string}>('http://localhost:13000/api/authenticate', {userName, password})
        .pipe(
          map(result => {
        localStorage.setItem('access_token', result.token);
        localStorage.setItem('role',result.role);
        localStorage.setItem('userName',result.userName);
        localStorage.setItem('_id',result._id);

        const time_to_login = Date.now() + 86400; // one week
        localStorage.setItem('timer', JSON.stringify(time_to_login));
         // this.currentUser=result.user;
         // console.log(result.user)
            return true;
          })
        );
    }
  
    logout() {
      localStorage.removeItem('access_token');
      localStorage.removeItem('role');
      localStorage.removeItem('userName');
      localStorage.removeItem('_id');



    }
    get currentUser1()
    {
      return localStorage.getItem('userName');
    }
    get isAdmin() {
      return (localStorage.getItem('role')==="admin" );// this.currentUser && this.currentUser.role === "admin";
   }
    public get loggedIn(): boolean {
      return (localStorage.getItem('access_token') !== null);
    }
   
  
    
    
    
   
   
 

}
