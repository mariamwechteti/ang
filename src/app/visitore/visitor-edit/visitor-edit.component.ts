import { Component, OnInit } from '@angular/core';
import { UserService } from '../../User.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {User} from '../../user';
import {ErrorHandlerService} from '../../shared/error-handler.service';
import * as $ from "jquery";
@Component({
  selector: 'app-visitor-edit',
  templateUrl: './visitor-edit.component.html',
  styleUrls: ['./visitor-edit.component.css']
})
export class VisitorEditComponent implements OnInit {
  usrid: string;
  public errorMessage: string = '';
  public user: User;
  formGroup: FormGroup;
  constructor(private service: UserService,private errorHandler: ErrorHandlerService, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getUserById();
    this.initializeForm();
  }
  
 // To Initialize Form
 initializeForm() {
  this.formGroup = this.formBuilder.group({
  firstName: ['', [Validators.required]],
  lastName: ['', [Validators.required]],
  email: ['', [Validators.required]],
  role: ['', [Validators.required]],
  password: ['', [Validators.required]],
 userName: ['', [Validators.required]],

  });
  }
  
  
  
  // To Update User Detail
  updateUser(data) {
  if (this.formGroup.valid) {
    let id=this.activatedRoute.snapshot.params['usrid'];
    let userUpdated:User={
      _id:id,
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
  private getUserById() {
    let userId: string = this.activatedRoute.snapshot.params['usrid'];
      
   
    this.service.getUserById(userId)
      .subscribe(res => {
        this.user = res as User;
        this.formGroup.patchValue(this.user);
        console.log(localStorage.access_token);

      },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      })
  }
  public hasError(controlName: string, errorName: string) {
    if (this.formGroup.controls[controlName].hasError(errorName))
      return true;
   
    return false;
  }
  public validateControl(controlName: string) {
    if (this.formGroup.controls[controlName].invalid && this.formGroup.controls[controlName].touched)
      return true;
   
    return false;
  }
  public redirectToUserList(){
    this.router.navigate(['/vistors']);
  }

}
