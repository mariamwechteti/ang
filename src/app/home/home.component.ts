import { Component, OnInit , LOCALE_ID, Inject } from '@angular/core';
import{User} from '../user';
import {Role} from '../role';
import {MenuItem} from 'primeng/api';
import {AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
export interface Language {
  value: string;
  viewValue: string;
}
declare var $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn$:boolean;
  items: MenuItem[];
  role:Role;
  languages: Language[] = [
    {value: 'french', viewValue: 'French'},
    {value: 'english', viewValue: 'English'}
  ];
  constructor(private authService: AuthentificationService,private router: Router,) { 
  }

logout() {
  this.authService.logout();
  this.router.navigate(['login']);
}
 
  ngOnInit() {
    this.isLoggedIn$ = this.authService.loggedIn;
    this.items = [
      {label: 'Francais', icon: 'pi  pi-circle-off', command: () => {
      }},
      {label: 'English', icon: 'pi  pi-circle-off', command: () => {
      }},
      {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/']}
  ];

  //  document.body.className="hold-transition login-page";
    $( ()=> {
     

      $.notify({
          icon: 'pe-7s-gift',
          message: "Welcome to <b> claim plateform</b> -please give us your thoughts."

        },{
            type: 'info',
            timer: 4000
        });
    });
  }

}
