import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../models/WeatherData';
import { signal } from '@angular/core'; // Importando signal do Angular
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly baseUrl = environment.BASE_URL;
  private readonly apiKey = environment.API_KEY;
  
  weatherData = signal<WeatherData | null>(null);
  
  constructor(
    private http: HttpClient
  ) { }

  getWeatherData(cityName: string = 'Brasilia') {
    this.http.get<WeatherData>(`${this.baseUrl}?q=${cityName}&units_metric&mode=json&appid=${this.apiKey}`)
    .pipe(take(1))
    .subscribe({
      next: (data: WeatherData) => {
        this.weatherData.set(data);
      },
      error: (error) => {
        console.error('Erro ao obter os dados do tempo:', error);
        this.weatherData.set(null);
      }
    }
    );
  }
}
