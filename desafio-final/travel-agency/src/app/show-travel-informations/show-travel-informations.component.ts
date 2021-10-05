import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries-service.service';

@Component({
  selector: 'show-travel-informations',
  templateUrl: './show-travel-informations.component.html',
  styleUrls: ['./show-travel-informations.component.css']
})
export class ShowTravelInformationsComponent implements OnInit {

  travelInformations: any = localStorage.getItem("travelInformations");
  planeClass: string = "";

  distanceCities: number = 0;

  latLonOriginCity: Array<String> = new Array();
  latLonDestinyCity: Array<String> = new Array();

  hasChilds: boolean = false;
  hasMiles: boolean = false;
  warningMiles: boolean = false;

  priceAdult: number = 0;
  priceChild: number = 0;
  totalPrice: number = 0;
  discountMiles: number = 0;
  totalPriceDiscount: number = 0;

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    if (this.travelInformations != "{}" && this.travelInformations != null) {
      this.travelInformations = JSON.parse(this.travelInformations);

      if (this.travelInformations.executiveClass != "") {
        this.planeClass = "Classe executiva";
      } else {
        this.planeClass = "Classe econômica";
      }

      this.latLonOriginCity = this.getLatitudeLongitudeCity(this.travelInformations.originCountry, this.travelInformations.originCity);
      this.latLonDestinyCity = this.getLatitudeLongitudeCity(this.travelInformations.destinyCountry, this.travelInformations.destinyCity);
    }
  }

  getLatitudeLongitudeCity(country: string, city: string): Array<String> {
    let arrayLatLon: Array<String> = new Array();

    this.countriesService.getCountriesInformation().subscribe(countries => {

      for (let countryInfo of countries) {
        if (countryInfo.country == country) {
          for (let cityInfo of countryInfo.cities) {
            if (cityInfo.city == city) {
              arrayLatLon.push(cityInfo.latitude);
              arrayLatLon.push(cityInfo.longitude);

              if (this.latLonOriginCity.length > 0 && this.latLonDestinyCity.length > 0) {
                this.distanceCities = this.getDistanceCitiesKm(this.latLonOriginCity, this.latLonDestinyCity);

                if (this.distanceCities != 0) {
                  this.calculateTravelPrice();
                }
              }
            }
          }
        }
      }

    }, error => {
      console.log(error);
    });

    return arrayLatLon;
  }

  getDistanceCitiesKm(latLonOriginCity: Array<String>, latLonDestinyCity: Array<String>): number {

    // TODO: Usar outra API exceto DistanceMatrix e criar service

    let radiusEarthKm = 6371;

    let latitudeOriginCity: number = Number(latLonOriginCity[0]);
    let longitudeOriginCity: number = Number(latLonOriginCity[1]);

    let latitudeDestinyCity: number = Number(latLonDestinyCity[0]);
    let longitudeDestinyCity: number = Number(latLonDestinyCity[1]);

    let differenceLatitude = (latitudeDestinyCity - latitudeOriginCity) * (Math.PI / 180);  // radianos
    let differenceLongitude = (longitudeDestinyCity - longitudeOriginCity) * (Math.PI / 180);  // radianos

    let a = Math.sin(differenceLatitude / 2) * Math.sin(differenceLatitude / 2) +
      Math.cos(latitudeOriginCity * (Math.PI / 180))
      * Math.cos(latitudeDestinyCity * (Math.PI / 180))
      * Math.sin(differenceLongitude / 2) * Math.sin(differenceLongitude / 2);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    let distanceCitiesKM = radiusEarthKm * c;
    return Math.round(distanceCitiesKM);

    // TODO: Calcular preços
  }

  calculateTravelPrice(): void {

    if (this.travelInformations.originCountry == this.travelInformations.destinyCountry) {
      
      this.priceAdult = this.distanceCities * 0.3;

      if (this.travelInformations.childs > 0) {
        this.hasChilds = true;

        this.priceChild = this.distanceCities * 0.15;
      }
    } else {

      this.priceAdult = this.distanceCities * 0.5;

      if (this.travelInformations.childs > 0) {
        this.hasChilds = true;

        this.priceChild = this.distanceCities * 0.25;
      }
    }

    if (this.travelInformations.executiveClass != "") {
      this.priceAdult = this.priceAdult * 1.8;
      this.priceChild = this.priceChild * 1.4;
    }

    this.totalPrice += this.priceAdult * this.travelInformations.adults;
    this.totalPrice += this.priceChild * this.travelInformations.childs;

    if (this.travelInformations.miles > 0) {
      this.hasMiles = true;

      this.discountMiles = this.travelInformations.miles * 0.02;
      this.totalPriceDiscount = this.totalPrice - this.discountMiles;

      if (this.discountMiles > this.totalPrice) {
        this.hasMiles = false;
        this.warningMiles = true;
      }
    }
  }

}
