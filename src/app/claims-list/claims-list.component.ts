import { Component, OnInit } from '@angular/core';
import {ClaimService} from '../claim.service';
import { ImageService } from '../image.service';
import { HttpClient} from '@angular/common/http';
import { DomSanitizer,SafeUrl} from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
import { from } from 'rxjs';
declare var $;
@Component({
  selector: 'app-claims-list',
  templateUrl: './claims-list.component.html',
  styleUrls: ['./claims-list.component.css']
})
export class ClaimsListComponent implements OnInit {
    Claim: any = [];
    foto: SafeUrl = [];
    imgUrl: string = "http://localhost:13000/api/photos";
    bytes :any;
    uints:any;
    url :any;
    imageurl:SafeUrl;
    base64:any;
  constructor( public restApi: ClaimService ,private domSanitizer: DomSanitizer,private http:HttpClient,private imgService:ImageService,private router: Router) { }

  ngOnInit() {
    this.getAllClaims();
  //  this.getImage();
    $(function () {
      $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
     });
  }
 
  

getImage():void{

   
     this.imgService.getImage(this.imgUrl).subscribe(data=>
    
    {
      
    this.bytes=data.img.data.data;
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
userName=localStorage.getItem("userName");
  getAllClaims(): void {
    this.restApi.getUser().subscribe(data=>{
      this.Claim = data.posts;

      let length = this.Claim.length;
      for (let i=0;i<length;i++)
      {
     
        this.bytes=this.Claim[i].Imgdata.data;
        this.uints =new Uint8Array(this.bytes);
       // var len =this.uints.byteLength;
        // console.log(this.uints);
      
       this.base64 =btoa(String.fromCharCode.apply(null,this.uints));
      // console.log(this.base64);
        this.url ='data:'+this.Claim[i].ImgType+ ';base64, '+ this.base64;
       // console.log(this.url);
        this.imageurl = this.domSanitizer.bypassSecurityTrustUrl(this.url);
        
        this.foto[i]=this.imageurl;
        console.log(this.foto[i]);
      }
      console.log(this.imageurl);

    });
  };
  edit() {
    this.router.navigate(['/create-claims']);
    }
    deleteUser(usrid) {
      this.restApi.deleteUser(usrid).subscribe(() => {
      });
      }

}
