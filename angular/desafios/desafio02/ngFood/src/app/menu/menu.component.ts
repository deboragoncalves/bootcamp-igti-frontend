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

  translateFoodTitle(foodTitle: string): string {
    switch (foodTitle) {
      case "acai":
        return "Açaí"
      case "sandwiches":
        return "Sanduíches"
      case "juices":
        return "Sucos"
      default:
        return "";
    }
  }

}
