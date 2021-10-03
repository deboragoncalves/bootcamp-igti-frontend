import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../countries-service.service';
import { Country } from '../country';

@Component({
  selector: 'get-travel-informations',
  templateUrl: './get-travel-informations.component.html',
  styleUrls: ['./get-travel-informations.component.css']
})
export class GetTravelInformationsComponent implements OnInit {

  travelForm!: FormGroup;

  countries: Array<Country> = new Array();
  originCountryCities: Array<any> = new Array();
  destinyCountryCities: Array<any> = new Array();

  invalidCountry: boolean = false;
  invalidAdults: boolean = false;
  invalidChilds: boolean = false;

  miles: number = 0;

  constructor(private countriesService: CountriesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.countriesService.getCountriesInformation().subscribe(countries => {
      this.countries = countries;
    });

    this.travelForm = this.formBuilder.group({
      originCountry: ['', Validators.required],
      destinyCountry: ['', Validators.required],
      originCity: ['', Validators.required],
      adults: [1, Validators.required],
      childs: [0, Validators.required],
      destinyCity: ['', Validators.required],
      economicClass: [''],
      executiveClass: [''],
      miles: [0]
    });

  }

  // TODO: Corrigir bug: Maximum call stack size exceeded

  onChangeOriginCountry(newOriginCountry: string): void {
    this.travelForm.get("originCountry")?.setValue(newOriginCountry);
    this.getOriginCountryCities();
  }

  onChangeDestinyCountry(newDestinyCountry: string): void {
    this.travelForm.get("destinyCountry")?.setValue(newDestinyCountry);
    this.getDestinyCountryCities();
  }

  onChangeMiles(newMiles: number): void {
    if (this.travelForm.get("miles")?.value) {
      this.miles = newMiles;
    }
  }

  onChangeEconomicClass(newValue: string) {
    if (this.travelForm.get("executiveClass")?.value) {
      this.travelForm.get("executiveClass")?.setValue("");
    }
  }

  onChangeExecutiveClass(newValue: string) {
    if (this.travelForm.get("economicClass")?.value) {
      this.travelForm.get("economicClass")?.setValue("");
    }
  }

  getOriginCountryCities(): void {
    // TODO: Melhorar

    if (this.countries) {
      for (let country of this.countries) {
        if (country.country == "Japão" && this.travelForm.get("originCountry")?.value == "Japão") {
          this.originCountryCities = country.cities;
          break;
        } else if (country.country == "Brasil" && this.travelForm.get("originCountry")?.value == "Brasil") {
          this.originCountryCities = country.cities;
          break;
        } else if (country.country == "Bélgica" && this.travelForm.get("originCountry")?.value == "Bélgica") {
          this.originCountryCities = country.cities;
          break;
        } else if (country.country == "Egito" && this.travelForm.get("originCountry")?.value == "Egito") {
          this.originCountryCities = country.cities;
          break;
        } else if (country.country == "Canadá" && this.travelForm.get("originCountry")?.value == "Canadá") {
          this.originCountryCities = country.cities;
          break;
        }
      }
    }
  }

  getDestinyCountryCities(): void {
    // TODO: Melhorar

    if (this.countries) {
      for (let country of this.countries) {
        if (country.country == "Japão" && this.travelForm.get("destinyCountry")?.value == "Japão") {
          this.destinyCountryCities = country.cities;
          break;
        } else if (country.country == "Brasil" && this.travelForm.get("destinyCountry")?.value == "Brasil") {
          this.destinyCountryCities = country.cities;
          break;
        } else if (country.country == "Bélgica" && this.travelForm.get("destinyCountry")?.value == "Bélgica") {
          this.destinyCountryCities = country.cities;
          break;
        } else if (country.country == "Egito" && this.travelForm.get("destinyCountry")?.value == "Egito") {
          this.destinyCountryCities = country.cities;
          break;
        } else if (country.country == "Canadá" && this.travelForm.get("destinyCountry")?.value == "Canadá") {
          this.destinyCountryCities = country.cities;
          break;
        }
      }
    }
  }

  increaseAdults(): void {
    let increaseAdultValue = this.travelForm.get("adults")?.value + 1;
    this.travelForm.get("adults")?.setValue(increaseAdultValue);
  }

  decreaseAdults(): void {

    if (this.travelForm.get("adults")?.value > 1) {
      let decreaseAdultValue = this.travelForm.get("adults")?.value - 1;
      this.travelForm.get("adults")?.setValue(decreaseAdultValue);
    }

  }

  increaseChilds(): void {
    let increaseChildValue = this.travelForm.get("childs")?.value + 1;
    this.travelForm.get("childs")?.setValue(increaseChildValue);
  }

  decreaseChilds(): void {

    if (this.travelForm.get("childs")?.value > 0) {
      let decreaseChildValue = this.travelForm.get("childs")?.value - 1;
      this.travelForm.get("childs")?.setValue(decreaseChildValue);
    }

  }

  validatedForm(): void {
    if (this.travelForm.get("originCountry")?.value == this.travelForm.get("destinyCountry")?.value) {
      this.invalidCountry = true;
    }

    if (this.travelForm.get("adults")?.value < 1) {
      this.invalidAdults = true;
    }

    if (this.travelForm.get("childs")?.value < 0) {
      this.invalidChilds = true;
    }
  }

}