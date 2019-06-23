import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild} from '@angular/core';

import {ClaimService} from '../../claim.service';
import { HttpResponse, HttpEventType ,HttpClient} from '@angular/common/http';
import {MessageService} from 'primeng/components/common/messageservice';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [MessageService]

})
export class AddComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;

  @ViewChild('fileInput') fileInput: ElementRef;
  constructor( private fb: FormBuilder,private apiService :ClaimService,private http: HttpClient,private messageService: MessageService) {}

  ngOnInit() {
this.createForm();
  }
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      avatar: null
    });
  }
  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.toString().split(',')[1]
        })
      };
    }
    

  }


  onSubmit() {
    const formModel =  this.form.value;
    this.loading = true;
    console.log(formModel);
    this.apiService.postClaim(formModel);
    // In a real-world app you'd have a http request / service call here like
    setTimeout(() => {
      // FormData cannot be inspected (see "Key difference"), hence no need to log it here
    

      alert('done!');
      this.loading = false;
    }, 1000);
  }
  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

}
