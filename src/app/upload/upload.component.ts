import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end-service.service';

import { ExcelReadingService } from '../excel-reading.service';
import * as XLSX from 'xlsx';
import * as SAMPLE from '../shared/property-mapping.model';
import * as inbound from '../shared/inbound-invoice.model';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  weather : any = ['vrijeme','vreme'];
  filePath : string = "Please select a file";
  readData: Array<any> = ["I am empty"];
  inboundInvoices : Array<inbound.InboundInvoice> = null;

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
      });
  }

  onChooseFile(event): void {
    this.filePath = event.target.value.substring(event.target.value.lastIndexOf('\\')+1);
    
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      this.readData = jsonData[Object.keys(jsonData)[0]];      
      
    }
    reader.readAsBinaryString(file);
  }

  onUpload() {
    
    //console.log(this.readData);

    let auxData = this.readData.slice(0,5);

    auxData.forEach(element => {
      let invoice = new inbound.InboundInvoice();
      console.log(element);
      for (let prop in element){
        console.log(prop);
        
        let invProp = SAMPLE.sampleMap.get(prop);
        console.log(invProp);

        invoice[invProp] = element[prop];
      }

      console.log(invoice);
    });
  }

}
