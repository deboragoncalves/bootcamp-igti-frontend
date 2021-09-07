import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodRequestsService {

  baseUrl: string = "http://localhost:3000/"

  constructor(private httpClient: HttpClient) { }

  getRequests() {
    return this.httpClient.get<Array<Request>>(this.baseUrl + "requests");
  }

  getRequestById(id: number) {
    return this.httpClient.get<Request>(this.baseUrl + "requests/" + id);
  }

  deleteRequest(id: number) {
    return this.httpClient.delete(this.baseUrl + "requests/" + id);
  }
}
