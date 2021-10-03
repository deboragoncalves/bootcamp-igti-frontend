import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries-service.service';
import { Country } from '../country';

@Component({
  selector: 'get-travel-informations',
  templateUrl: './get-travel-informations.component.html',
  styleUrls: ['./get-travel-informations.component.css']
})
export class GetTravelInformationsComponent implements OnInit {

  countries: Array<Country> = new Array();
  originCountryCities: Array<any> = new Array();
  destinyCountryCities: Array<any> = new Array();

  originCountry: string = "";
  destinyCountry: string = "";

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getCountriesInformation().subscribe(countries => {
      this.countries = countries;
    });
  }

  onChangeOriginCountry(newOriginCountry: string): void {
    this.originCountry = newOriginCountry;
    this.getOriginCountryCities();
  }

  onChangeDestinyCountry(newDestinyCountry: string): void {
    this.destinyCountry = newDestinyCountry;
    console.log(this.destinyCountry);
    this.getDestinyCountryCities();
  }

  getOriginCountryCities(): void {

    // TODO: Melhorar

    for (let country of this.countries) {
      if (country.country == "Japão" && this.originCountry == "Japão") {
        this.originCountryCities = country.cities;
      } else if (country.country == "Brasil" && this.originCountry == "Brasil") {
        this.originCountryCities = country.cities;
      } else if (country.country == "Bélgica" && this.originCountry == "Bélgica") {
        this.originCountryCities = country.cities;
      } else if (country.country == "Egito" && this.originCountry == "Egito") {
        this.originCountryCities = country.cities;
      } else if (country.country == "Canadá" && this.originCountry == "Canadá") {
        this.originCountryCities = country.cities;
      }
    }
  }
  
  getDestinyCountryCities(): void {
    // TODO: Melhorar

    for (let country of this.countries) {
      if (country.country == "Japão" && this.destinyCountry == "Japão") {
        this.destinyCountryCities = country.cities;
        console.log(this.destinyCountryCities);
      } else if (country.country == "Brasil" && this.destinyCountry == "Brasil") {
        this.destinyCountryCities = country.cities;
        console.log(this.destinyCountryCities);
      } else if (country.country == "Bélgica" && this.destinyCountry == "Bélgica") {
        this.destinyCountryCities = country.cities;
      } else if (country.country == "Egito" && this.destinyCountry == "Egito") {
        this.destinyCountryCities = country.cities;
      } else if (country.country == "Canadá" && this.destinyCountry == "Canadá") {
        this.destinyCountryCities = country.cities;
      }
    }
  }

}