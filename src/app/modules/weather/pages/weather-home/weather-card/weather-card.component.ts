import { Component, Input, OnInit, signal } from "@angular/core";
import { WeatherData } from "../../../models/WeatherData";
import { IconDefinition } from "@fortawesome/angular-fontawesome";
import {
  faTint,
  faTemperatureLow,
  faTemperatureHigh,
  faWind,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-weather-card",
  standalone: false,
  template: `
    @if(weatherData()) {
    <div class="container">
      <div class="upper-data">
        @switch(getWeatherState()) { @case('warm') {
        <img src="sun.jpg" alt="Imagem do Sol" />
        } @case('cold') {
        <img src="cold1.jpg" alt="Imagem de Frio" />
        } @default {
        <img src="raining.jpg" alt="Imagem de Chuva" />
        } }

        <div class="weather-data">
          <div class="location">{{ weatherData()!.name }}</div>
          <div class="temperature">
            {{ convertKelvinToCelsius(weatherData()!.main.temp) | number : "1.1-1" }}ºC
          </div>
        </div>
      </div>

      <div class="lower-data">
        <div class="more-info-label">Mais informações</div>
        <div class="more-info-container">
          <div class="info-block">
            <div class="info-block-label">
              <fa-icon [size]="'lg'" [icon]="minTemperatureIcon" />
              <span>Mínima</span>
            </div>

            <div class="info-block-value">
              {{ convertKelvinToCelsius(weatherData()!.main.temp_min) | number : "1.1-1" }} ºC
            </div>
          </div>

          <div class="info-block">
            <div class="info-block-label">
              <fa-icon [size]="'lg'" [icon]="maxTemperatureIcon" />
              <span>Máxima</span>
            </div>

            <div class="info-block-value">
              {{ convertKelvinToCelsius(weatherData()!.main.temp_max) | number : "1.1-1" }} ºC
            </div>
          </div>

          <div class="info-block">
            <div class="info-block-label">
              <fa-icon [size]="'lg'" [icon]="humidityIcon" />
              <span>Umidade</span>
            </div>

            <div class="info-block-value">{{ weatherData()!.main.humidity }}%</div>
          </div>

          <div class="info-block">
            <div class="info-block-label">
              <fa-icon [size]="'lg'" [icon]="windIcon" />
              <span>Vento</span>
            </div>

            <div class="info-block-value">
              {{ weatherData()!.wind.speed }} km/h
            </div>
          </div>
        </div>
      </div>
    </div>
    } @else {
    <p>Não há resultados.</p>
    }
  `,
  styles: ``,
})
export class WeatherCardComponent implements OnInit {
  @Input("weatherData") weatherData = signal<WeatherData | null>(null);
  readonly minTemperatureIcon: IconDefinition = faTemperatureLow;
  readonly maxTemperatureIcon: IconDefinition = faTemperatureHigh;
  readonly humidityIcon: IconDefinition = faTint;
  readonly windIcon: IconDefinition = faWind;

  ngOnInit(): void {
    console.log();
  }

  getWeatherState(): string {
    if (!this.weatherData) return "noData";

    const temp = this.weatherData()!.main.temp;

    switch (true) {
      case temp > 15:
        return "warm";
      case temp <= 15:
        return "cold";
      default:
        return "noData";
    }
  }

  convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }
}
