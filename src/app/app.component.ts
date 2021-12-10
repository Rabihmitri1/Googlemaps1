import { Component,OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'googleMaps';
  constructor() { }
  ngOnInit(): void {
    let loader=new Loader({
      apiKey:environment.PRIVATE_API_KEY
    })
   loader.load().then(()=>{
    new google.maps.Map(
      document.getElementById('map')!,
      {
        center: {lat: 33.874, lng: 35.5089},
        zoom: 8
      }
    );
   }

    );

    }

  }

 