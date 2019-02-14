import { Injectable,Component } from '@angular/core';

import { Restaurant } from './restaurant/restaurant.model';

@Injectable()
export class RestaurantsServiceService {


  

rests:Restaurant[] = [{

  id: "bread-Bakery",
  name: "bread & Bakery",
  category: "Bakery",
  deliveryEstimate: "25m",
  rating: 4.9,
  imagePath: "./assets/img/restaurants/breadbakery.png"

},
{
  id: "Burger-House",
  name: "Burger & House",
  category: "Burger",
  deliveryEstimate: "100m",
  rating: 4.5,
  imagePath: "assets/img/restaurants/burgerhouse.png"

}]

  constructor() { }


restaurants():Restaurant[]{
return this.rests 

}


}
