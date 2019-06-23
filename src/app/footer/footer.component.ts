import { Component, OnInit } from '@angular/core';
import {AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private authService: AuthentificationService,private router: Router) { }

  ngOnInit() {

  }
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
