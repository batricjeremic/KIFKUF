import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end-service.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  weather : any = ['vrijeme','vreme'];

  constructor(
    private backendService: BackEndService
  ) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.backendService.getWeather().subscribe(data=> {
      this.weather=data;
    console.log(this.weather)});
    
    ;
  }

}
