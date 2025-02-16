import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherHomeComponent } from './pages/weather-home/weather-home.component';
import { SearchBarComponent } from './pages/weather-home/search-bar/search-bar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    WeatherHomeComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class WeatherModule { }
