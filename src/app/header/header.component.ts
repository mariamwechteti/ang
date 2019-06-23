import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{User} from '../user';
import {Role} from '../role';
import {AuthentificationService} from '../authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  role:Role;
  constructor(
    private router: Router,
   public auth: AuthentificationService
  ) {

   }


  ngOnInit() {
    document.body.className='skin-blue layout-top-nav';


  }
  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
