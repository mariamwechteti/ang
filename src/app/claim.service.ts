import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import  {User} from './user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
// Define API
apiURL= 'http://localhost:13000/api/';
URL = 'http://localhost:13000/api/upload';

  constructor(private http: HttpClient) { }
  getAllClaims(userName){
    return this.http.get<User>(this.apiURL+ 'postP',userName);
  }
  getUser(): Observable<any> {
    return this.http.get('http://localhost:13000/api/postP/'+localStorage.getItem("userName"));
  }
  public getUserById(id):Observable<User>{
    return this.http.get<User>('http://localhost:13000/api/postP/'+id);
}
deleteUser(id : string){
  return this.http.delete('http://localhost:13000/api/deletePost/'+id);
 }
 postClaim(formData){
  return this.http.post('http://localhost:13000/api/posts1/'+localStorage.getItem("_id"),formData);
   
 }
  pushFileToStorage(file:File,desc:string):Observable<HttpEvent<{}>>
  {
    const formdata : FormData = new FormData();
    formdata.append('file',file);
    formdata.append('desc',desc);
    const req=new HttpRequest('POST','http://localhost:13000/api/posts/'+localStorage.getItem("_id"), formdata ,
    {
      reportProgress:true,
      responseType:'text'
    }
    );
    return this.http.request(req);
  }
}
