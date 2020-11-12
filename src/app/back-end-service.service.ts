import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(
    private http: HttpClient
  ) { }

  getWeather(): any {
    return this.http.get<any>('https://kifkufserver.azurewebsites.net/weatherforecast');
  }
  


}
