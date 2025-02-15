import { Component, inject, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-home',
  standalone: false, 
  template: `

    @defer {
      <div *ngIf="weatherData() as weatherData">
        <h2>{{ weatherData.id }}</h2>
        <p>{{ weatherData.timezone }}°C</p>
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
}
