import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries-service.service';

@Component({
  selector: 'get-travel-informations',
  templateUrl: './get-travel-informations.component.html',
  styleUrls: ['./get-travel-informations.component.css']
})
export class GetTravelInformationsComponent implements OnInit {

  countries: Array<Object> = new Array();

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getCountriesInformation().subscribe(countries => {
      this.countries = countries;
      console.log(this.countries[0]);
    })
  }

}
