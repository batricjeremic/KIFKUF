import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end-service.service';

import { ExcelReadingService } from '../excel-reading.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  weather : any = ['vrijeme','vreme'];
  filePath : string = "Please select a file";

  constructor(
    private backendService: BackEndService,
    private excelReadingService : ExcelReadingService
  ) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.backendService.getWeather().subscribe(data => {
      this.weather = data;
      console.log(this.weather)});
  }

  onChooseFile(event): void {
    console.log(event.target.value);
    this.filePath = event.target.value.substring(event.target.value.lastIndexOf('\\')+1);
    this.excelReadingService.parseFile(event.target.files[0]);
  }

}
