import { Component, LOCALE_ID, Inject } from '@angular/core';

import { 
        Event,
       
        Router } from '@angular/router';
        import {AuthentificationService}from './authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapplication';
  languageList = [ 
    { code: 'en', label: 'English' }, 
    { code: 'fr', label: 'French' },  
    { code: 'it', label: 'italian' }  ];
  constructor(@Inject(LOCALE_ID) protected localeId: string, private _router: Router, private auth :AuthentificationService) {
    this._router.events.subscribe((event: Event) => {
    });
  }
  ngOnInit() {
    const timer = JSON.parse(localStorage.getItem('timer'));
    if (timer && (Date.now() > timer)) {
      this.auth.logout();
      this._router.navigate(['/login']);
    }
  }
 
}
