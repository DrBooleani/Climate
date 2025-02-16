import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherHomeComponent } from './pages/weather-home/weather-home.component';
import { SearchBarComponent } from './pages/weather-home/search-bar/search-bar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherCardComponent } from './pages/weather-home/weather-card/weather-card.component';


@NgModule({
  declarations: [
    WeatherHomeComponent,
    SearchBarComponent,
    WeatherCardComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    FontAwesomeModule,
    FormsModule,
    DecimalPipe
  ]
})
export class WeatherModule { }
