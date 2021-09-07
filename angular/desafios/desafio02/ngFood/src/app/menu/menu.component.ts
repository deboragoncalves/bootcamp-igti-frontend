import { Component, OnInit } from '@angular/core';
import { FoodRequestsService } from '../food-requests.service';

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

  totalRequests: number = 0;
  totalValue: number = 0;

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

    let juiceRequestObject = {};

    if (juice.name == "Suco de laranja") {
      this.juiceRequests++;

      juiceRequestObject = {
        requests: this.juiceRequests,
        juice: juice.name,
        total: juice.price * this.juiceRequests
      }

      this.totalValue += JSON.parse(JSON.stringify(juiceRequestObject)).total;
    } else if (juice.name == "Suco de uva") {
      this.juiceRequests++;

      juiceRequestObject = {
        requests: this.juiceRequests,
        juice: juice.name,
        total: juice.price * this.juiceRequests
      }

      this.totalValue += JSON.parse(JSON.stringify(juiceRequestObject)).total;
    }

    this.totalRequests++;
  }

  acaiRequest(acai: any) {

    let acaiRequestObject = {};

    if (acai.name.includes("Leite ninho")) {
      this.acaiRequests++;

      acaiRequestObject = {
        requests: this.acaiRequests,
        acai: acai.name,
        total: acai.price * this.acaiRequests
      }  

      this.totalValue += JSON.parse(JSON.stringify(acaiRequestObject)).total;
    } else if (acai.name.includes("puro")) {
      this.acaiRequests++;

      acaiRequestObject = {
        requests: this.acaiRequests,
        acai: acai.name,
        total: acai.price * this.acaiRequests
      }

      this.totalValue += JSON.parse(JSON.stringify(acaiRequestObject)).total;
    }

    this.totalRequests++;
  }

  sandwichRequest(sandwich: any) {

    let sandwichRequestObject = {};

    if (sandwich.name.includes("Egg")) {
      this.sandwichRequests++;

      sandwichRequestObject = {
        requests: this.sandwichRequests,
        sandwich: sandwich.name,
        total: sandwich.price * this.sandwichRequests
      }
      
      this.totalValue += JSON.parse(JSON.stringify(sandwichRequestObject)).total;

    } else if (sandwich.name.includes("Burguer")) {
      this.sandwichRequests++;

      sandwichRequestObject = {
        requests: this.juiceRequests,
        sandwich: sandwich.name,
        total: sandwich.price * this.sandwichRequests
      }

      this.totalValue += JSON.parse(JSON.stringify(sandwichRequestObject)).total;
    }

    this.totalRequests++;
  }

}
