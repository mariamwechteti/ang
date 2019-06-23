import { Injectable } from '@angular/core';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  public errorMessage: string = '';
 // public dialogConfig;

  constructor(private router: Router, private dialog: MatDialog) { }
  private handleOtherError(error: HttpErrorResponse){
    this.createErrorMessage(error);

  //  this.dialogConfig.data = { 'errorMessage': this.errorMessage };
  //  this.dialog.open(ErrorDialogComponent, this.dialogConfig);
  }
  public handleError(error: HttpErrorResponse){
    if(error.status === 500){
      this.handle500Error(error);
    }
    else if(error.status === 404){
      this.handle404Error(error)
    }
    else{
      this.handleOtherError(error);
    }
  }
  private handle500Error(error: HttpErrorResponse){
    this.createErrorMessage(error);
    this.router.navigate(['/500']);
  }
 
  private handle404Error(error: HttpErrorResponse){
    this.createErrorMessage(error);
    this.router.navigate(['/404']);
  }
 
private createErrorMessage(error: HttpErrorResponse){
    this.errorMessage = error.error ? error.error : error.statusText;
  }
}
