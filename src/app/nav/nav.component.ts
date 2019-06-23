import { Component} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AuthentificationService } from '../authentification.service';
import {FacebookService} from '../facebook.service';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isLoggedIn$:boolean;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,private authService: AuthentificationService,private fbService: FacebookService,private router: Router) {}
  
logout() {
  this.authService.logout();
  this.router.navigate(['login']);
}
ngOnInit()
{
  this.isLoggedIn$ = this.authService.loggedIn;

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

