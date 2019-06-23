import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../authentification.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Message} from 'primeng/components/common/api';
import { first } from 'rxjs/operators';
declare var $;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
  
 

})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  msgs: Message[] = [];
  loading = false;
  submitted = false;
  returnUrl: string;
  public error: string;

  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthentificationService,
    
    
    
    
    ) {

    
     }
 
    ngOnInit() {
      
      document.body.className="hold-transition login-page";
      $( ()=> {
        $('input').iCheck({
          checkboxClass: 'icheckbox_square-blue',
          radioClass: 'iradio_square-blue',
          increaseArea: '20%' /* optional */
        });
      });
      this.loginForm = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
    });

   
    }
 
   // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }
   onSubmit() {
    this.submitted = true;

  /*  this.authenticationService.login(this.f.userName.value, this.f.password.value);
    this.router.navigate(['claims-list']);   */
    this.authenticationService.login(this.f.userName.value,this.f.password.value)
    .pipe(first())
    .subscribe(
      result => this.router.navigate(['/']),
      err => this.error = 'Could not authenticate'
    );
}
showError() {
  this.msgs = [];
  this.msgs.push({severity:'error', summary:'Error Message', detail:this.error});
}

}



