import { Component, inject, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../models/WeatherData';

@Component({
  selector: 'app-weather-home',
  standalone: false,
  template: `
    <app-search-bar (searchEvent)="onSearch($event)"></app-search-bar>
    @defer {
      <div *ngIf="weatherData() as weatherData">
        <h2>{{ weatherData?.id }}</h2>
        <p>{{ weatherData?.timezone }}°C</p>
      </div>
    }
    
    @loading {
      <p>Carregando dados do tempo...</p>
    }
  `,
  styles: [``]
})
export class WeatherHomeComponent implements OnInit {
  weatherService = inject(WeatherService);
  
  weatherData = this.weatherService.weatherData;

  ngOnInit(): void {
    this.weatherService.getWeatherData('Brasilia');
  }

  onSearch(city: string): void {
    this.weatherService.getWeatherData(city);
  }
}
