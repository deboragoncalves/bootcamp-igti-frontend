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

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getCountriesInformation().subscribe(countries => {
      this.countries = countries;  
    });
  }

}