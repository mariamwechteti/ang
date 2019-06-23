import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor(private _http: HttpClient) { }
  dailyForecast() {
    return this._http.get("http://localhost:13000/facebook")
      .map(result => result);
  }
}
