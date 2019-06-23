import { Component, OnInit } from '@angular/core';
import{LocationService} from '../location.service';
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})

export class GoogleMapComponent implements OnInit {
  lat: number;
    lng: number;
    city: string ='';
    
  constructor( private service: LocationService) { }

  ngOnInit() {
    this.getUserLocation();
    this.service.getLocation().subscribe(
      data=>{
        
        this.city=data.city;
      }
    )
  }
  private getUserLocation() {
    /// locate the user
    console.log('map starting');
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        console.log(this.lat);
        this.lng = position.coords.longitude;
        console.log(this.lng);


      });
    }
   
  }

}
