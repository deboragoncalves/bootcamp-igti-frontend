import { Component, OnInit } from '@angular/core';
import { FoodRequestsService } from '../food-requests.service';
import { TotalRequest } from '../totalRequest';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  juices: Array<any> = new Array();
  sandwhices: Array<any> = new Array();
  acai: Array<any> = new Array();

  options: Array<any> = new Array();

  juiceRequests: number = 0;
  acaiRequests: number = 0;
  sandwichRequests: number = 0;

  allRequests: number = 0;
  totalValueRequest: number = 0;
  totalAllRequests: number = 0;

  
  totalRequest: TotalRequest = {
    name: "",
    id: 0,
    totalPrice: 0,
    totalRequests: 0
  }

  constructor(private foodRequestsService: FoodRequestsService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.foodRequestsService.getRequests().subscribe(requests => {
      this.options = Object.values(requests);

      this.juices = this.options[0];
      this.sandwhices = this.options[1];
      this.acai = this.options[2];
    })
  }

  juiceRequest(juice: any) {

    this.juiceRequests++;

    this.totalRequest = {
      id: juice.id,
      totalRequests: this.juiceRequests,
      name: juice.name,
      totalPrice: juice.price * this.juiceRequests
    }

    this.totalValueRequest = JSON.parse(JSON.stringify(this.totalRequest)).totalPrice;
    this.totalAllRequests += this.totalValueRequest;
    this.allRequests++;
  }

  acaiRequest(acai: any) {

    this.acaiRequests++;

    this.totalRequest = {
      id: acai.id,
      totalRequests: this.acaiRequests,
      name: acai.name,
      totalPrice: acai.price * this.acaiRequests
    }

    this.totalValueRequest = JSON.parse(JSON.stringify(this.totalRequest)).totalPrice;
    this.totalAllRequests += this.totalValueRequest;
    this.allRequests++;
  }

  sandwichRequest(sandwich: any) {

    this.sandwichRequests++;

    this.totalRequest = {
      id: sandwich.id,
      totalRequests: this.sandwichRequests,
      name: sandwich.name,
      totalPrice: sandwich.price * this.sandwichRequests
    }

    this.totalValueRequest = JSON.parse(JSON.stringify(this.totalRequest)).totalPrice;
    this.totalAllRequests += this.totalValueRequest;
    this.allRequests++;
  }

  // TODO: Corrigir valor total
  // TODO: Componente pedidos

}
