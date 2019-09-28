import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WetherService {
  weatherUrl = 'assets/config.json';

  constructor( private http: HttpClient) { }

  getWeather(location): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APIID=b98a6f4e90454951e74c075db2b36748`);
  }
}
