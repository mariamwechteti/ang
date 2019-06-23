import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{User} from '../user';
import {UserService} from '../user.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from '../shared/error-handler.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

formGroup: FormGroup;
public errorMessage: string = '';
  public user: User;

  constructor( private service :UserService,private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,private errorHandler: ErrorHandlerService,private http:HttpClient,private router: Router) {

   }

  ngOnInit() {
    this.getUser();

    this.formGroup = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
     userName: ['', [Validators.required]],
    
      });
    
    
  }
  public validateControl(controlName: string) {
    if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
      return true;
   
    return false;
  }
  public hasError(controlName: string, errorName: string) {
    if (this.formGroup.controls[controlName].hasError(errorName))
      return true;
   
    return false;
  }
  private getUser() {
      
   
    this.service.getcurrentUser()
      .subscribe(res => {
        this.user = res as User;
        this.formGroup.patchValue(this.user);
        console.log(this.user);
      },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      })
  }
   
  // To Update User Detail
  updateUser(data) {
    if (this.formGroup.valid) {
      let userUpdated:User={
        _id:this.user._id,
       firstName: data.firstName,
       lastName: data.lastName,
       email: data.email,
       role: data.role,
       userName:data.userName,
       password:data.password,
       token:localStorage.accessToken,
       posts:null,
     
       }
    this.service.putUser(userUpdated).subscribe(() => {
    // $('#successModal').modal();
  
    }
    ,
      (error => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      })
      );
    }
    }
 

}
