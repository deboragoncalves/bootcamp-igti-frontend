import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseUrl: string = "http://localhost:3000/"

  constructor(private httpClient: HttpClient) { }

  getCountriesInformation() {
    return this.httpClient.get<Array<any>>(this.baseUrl + "countries");
  }

}
