import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import{User} from './user';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};



@Injectable({
  providedIn: 'root'
})
export class UserService {
 readonly regUri='http://localhost:13000/api/auth/signup';
 formData: User;
 list :User[];
 currentUser:User;
  constructor(private http:HttpClient) { }
  register(user: User) {
    return this.http.post(this.regUri,user);
}
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
addUser (user): Observable<User> {
  return this.http.post<User>('http://localhost:13000/api/postUser',user, httpOptions).pipe(
    tap((user: User) => console.log(`added user w/ id=${user._id}`)),
    catchError(this.handleError<User>('addUser '))
  );
}
postUser(formData : User){
  return this.http.post('http://localhost:13000/api/postUser',formData);
   
 }
 putUser(formData : User){
  return this.http.put('http://localhost:13000/api/updateUser/'+formData._id,formData);
   
 }
 deleteUser(id : number){
  return this.http.delete('http://localhost:13000/api/deleteUser/'+id);
 }
 refreshList(){
  this.http.get('http://localhost:13000/api/posts')
  .toPromise().then(res => this.list = res as User[]);
}
getcurrentUser():Observable<User>
{
  var token:string = localStorage.getItem("access_token");
  console.log(token);
  const httpOptions1 = {
    headers: new HttpHeaders({
        'access-token':token
})
};

 

  return this.http.get<User>("http://localhost:13000/api/user",httpOptions1).pipe(
    tap((user: User) => console.log(`added user w/ id=${user.userName}`)),
    catchError(this.handleError<User>('User '))
  );
 
  

}
getUsers (): Observable<User[]> {
  return this.http.get<User[]>('http://localhost:13000/api/posts')
    .pipe(
      tap(users => console.log('fetched users')),
      catchError(this.handleError('getUsers', []))

      
    );
}


 // To Get User Details For Single Record Using Id
 getUserById(usrid): Observable<User> {
  return this.http.get<User>('http://localhost:13000/api/post/'+usrid);
  }
}
