import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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


  sendKIF(data): any {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let encoded = encodeURIComponent(data);

    console.log(encoded);

    let params = new HttpParams().set("requestData", encodeURIComponent(data));

    //return this.http.get('https://kifkufserver.azurewebsites.net/fileupload', {params: params}); 


  }
  


}
