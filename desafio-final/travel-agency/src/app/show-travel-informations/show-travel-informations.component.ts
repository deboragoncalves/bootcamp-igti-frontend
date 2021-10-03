import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'show-travel-informations',
  templateUrl: './show-travel-informations.component.html',
  styleUrls: ['./show-travel-informations.component.css']
})
export class ShowTravelInformationsComponent implements OnInit {

  constructor() { }

  // TODO: Usar outra API exceto DistanceMatrix e criar service

  ngOnInit(): void {
    this.getDistanceCitiesKm();
  }

  getDistanceCitiesKm(): number {
    let radiusEarthKm = 6371;

    let latitudeOriginCity = 0;
    let latitudeDestinyCity = 0;

    let longitudeOriginCity = 0;
    let longitudeDestinyCity = 0;

    let differenceLatitude = (latitudeDestinyCity - latitudeOriginCity) * (Math.PI / 180);  // radianos
    let differenceLongitude = (longitudeDestinyCity - longitudeOriginCity) * (Math.PI / 180);  // radianos

    let a = Math.sin(differenceLatitude / 2) * Math.sin(differenceLatitude / 2) + 
    Math.cos(latitudeOriginCity * (Math.PI / 180)) 
    * Math.cos(latitudeDestinyCity * (Math.PI / 180)) 
    * Math.sin(differenceLongitude / 2) * Math.sin(differenceLongitude / 2);
   
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 

    let distanceCitiesKM = radiusEarthKm * c;
    return distanceCitiesKM;
  }

}
