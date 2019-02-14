import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from 'app/home/home.component'
import { HeaderComponent } from 'app/header/header.component'
import {ROUTES} from 'app/routes.app';
import { AboutComponent } from 'app/about/about.component';
import { RestaurantsComponent } from 'app/restaurants/restaurants.component';
import { RestaurantComponent } from 'app/restaurants/restaurant/restaurant.component'
import { RestaurantsServiceService } from './restaurants/restaurants-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ RestaurantsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
