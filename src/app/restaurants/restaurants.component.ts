import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsServiceService } from './restaurants-service.service'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {



restaurants: Restaurant[]


  constructor (private restaurantsService: RestaurantsServiceService) { }


  ngOnInit() {


this.restaurants = this.restaurantsService.restaurants()


  }

}
