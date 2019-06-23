import { Component, OnInit } from '@angular/core';
import {ClaimService} from '../../claim.service';
import {AuthentificationService} from '../../authentification.service';
import { ImageService } from '../../image.service';
import { HttpClient} from '@angular/common/http';
import { DomSanitizer,SafeUrl} from '@angular/platform-browser';
import {User} from '../../user';

import 'rxjs/add/operator/toPromise';

declare var $;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  Claim: any = [];
  alphas:any = [];
  imgUrl: string = "http://localhost:13000/api/photos";
  bytes :any;
  uints:any;
  url :any;
  imageurl:SafeUrl;

  base64:any;
 userName:string;
  constructor( public restApi: ClaimService , public authen:AuthentificationService,private domSanitizer: DomSanitizer,private http:HttpClient,private imgService:ImageService) { }

  ngOnInit() {
    this.getAllClaims();
    this.getImage();
    $(function () {
      $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
     });
  }
  getImage():void{
    this.imgService.getImage(this.imgUrl).subscribe(data=>
    
      {
        
      this.bytes=data.img.data.data;
      console.log(this.bytes);
    this.uints =new Uint8Array(this.bytes);
   // var len =this.uints.byteLength;
    // console.log(this.uints);
  
   this.base64 =btoa(String.fromCharCode.apply(null,this.uints));
  // console.log(this.base64);
    this.url ='data:'+ data.img.contentType+ ';base64, '+ this.base64;
   // console.log(this.url);
    this.imageurl = this.domSanitizer.bypassSecurityTrustUrl(this.url);
    console.log(this.imageurl);
      })
      
  }
  getAllClaims( ): void {

this.userName=this.authen.currentUser1;
let  userCreated:User={
  _id:null,
 firstName:null,
 lastName:null,
 email:null,
 role:null,
 userName:this.userName,
 password:null,
 token:null,
 posts:null,

 }
console.log(userCreated);
    this.restApi.getUserById(this.userName).subscribe(data=>{
      
      this.Claim = data.posts;
    }
  
   
    
    );
  };
  deleteUser(usrid) {
    this.restApi.deleteUser(usrid).subscribe(() => {
    });
    }
}
