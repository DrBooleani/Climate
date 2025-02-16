import { Component, inject, OnInit } from "@angular/core";
import { WeatherService } from "../../services/weather.service";

@Component({
  selector: "app-weather-home",
  standalone: false,
  template: `
    <app-search-bar (searchEvent)="onSearch($event)"></app-search-bar>
    @defer { @if (weatherData()) {
    <app-weather-card [weatherData]="weatherData" />
    } @else {
    <ng-template>
      <p>Make an search with an value before, to see all data from location</p>
    </ng-template>
    } } @loading {
    <p>Carregando dados do tempo...</p>
    }
  `,
  styles: [``],
})
export class WeatherHomeComponent implements OnInit {
  weatherService = inject(WeatherService);

  weatherData = this.weatherService.weatherData;

  ngOnInit(): void {
    this.weatherService.getWeatherData("Brasilia");
  }

  onSearch(city: string): void {
    this.weatherService.getWeatherData(city);
  }
}
