import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../authentification.service';
import {UserService} from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {Message} from 'primeng/components/common/api';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  msgs: Message[] = [];
  public error: string;
 
  constructor( private authService:AuthentificationService,
    private formBuilder: FormBuilder,
    private router: Router,
    
    private userService: UserService
  
    
    
    
    
    ) {  // redirect to home if already logged in
      }

  ngOnInit() {


    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email:['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      this.userService.register(this.registerForm.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate(['/login']);
              },
              error => {
                  this.loading = false;
              });
  }
 
  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
}

}
