import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../user.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';
import { ErrorHandlerService } from '../../shared/error-handler.service';
import {User} from '../../user';
@Component({
  selector: 'app-visitor-add',
  templateUrl: './visitor-add.component.html',
  styleUrls: ['./visitor-add.component.css']
})
export class VisitorAddComponent implements OnInit {
  private dialogConfig;
  formGroup: FormGroup;
  constructor(private location: Location,private formBuilder: FormBuilder, private service: UserService,private dialog: MatDialog, private router: Router, private errorService: ErrorHandlerService) { }

  ngOnInit() {
    this.initializeForm();
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { }
    }
  }
 // To initialize Form
 initializeForm() {
  this.formGroup = this.formBuilder.group({
  firstName: ['', [Validators.required]],
  lastName: ['', [Validators.required]],
  email: ['', [Validators.required]],
  role: ['', [Validators.required]],
  userName: ['', [Validators.required]],
  password: ['', [Validators.required]],

  });
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.formGroup.controls[controlName].hasError(errorName);
  }
  public onCancel = () => {
    this.location.back();
  }
  // Add User When Submit Button Is Clicked
 addUser(data) {
  if (this.formGroup.valid) {
  //let data = this.formGroup.value;
 let  userCreated:User={
   _id:null,
  firstName: data.firstName,
  lastName: data.lastName,
  email: data.email,
  role: data.role,
  userName:data.userName,
  password:data.password,
  token:localStorage.accessToken,
  posts:null,

  }
  this.service.addUser(userCreated).subscribe(() => {
    let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);
 
    //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
    dialogRef.afterClosed()
      .subscribe(result => {
       // this.location.back();
      });
  this.router.navigate(['/vistors']);
  }
  ,
    (error => {
      //temporary as well
     // this.errorService.dialogConfig = { ...this.dialogConfig };
      this.errorService.handleError(error);    })
  );
  }
  }

}
