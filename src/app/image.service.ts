import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http:HttpClient) { }
  getImage(url: string): Observable<any> {
    return this.http.get(url);
  }

}
