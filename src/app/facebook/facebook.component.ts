import { Component, OnInit } from '@angular/core';
import {FacebookService} from '../facebook.service';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  constructor(private fbService: FacebookService) { }

  
  ngOnInit() {
    this.fbService.dailyForecast()
    .subscribe(res => {
      console.log(res)
    })
}
  }

