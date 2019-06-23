import { Component, OnInit } from '@angular/core';
import {ClaimService} from '../claim.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import {MessageService} from 'primeng/components/common/messageservice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-claims-create',
  templateUrl: './claims-create.component.html',
  styleUrls: ['./claims-create.component.css'],
  providers: [MessageService]
})
export class ClaimsCreateComponent implements OnInit {
  loginForm: FormGroup;

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
constructor(private apiService :ClaimService,private messageService: MessageService,private formBuilder: FormBuilder) {}

  ngOnInit() {  
    this.loginForm = this.formBuilder.group({
      desc: ['', Validators.required],
    });
}

/**/
get f() { return this.loginForm.controls; }

selectFile(event) {
  this.selectedFiles = event.target.files;
}

upload() {
  this.progress.percentage = 0;

  this.currentFileUpload = this.selectedFiles.item(0);
  this.apiService.pushFileToStorage(this.currentFileUpload,this.f.desc.value).subscribe(event => {
    if (event.type === HttpEventType.UploadProgress) {
      this.progress.percentage = Math.round(100 * event.loaded / event.total);
    } else if (event instanceof HttpResponse) {
      console.log(this.f.desc.value);
      console.log('File is completely uploaded!');
    }
  });

  this.selectedFiles = undefined;
}


}