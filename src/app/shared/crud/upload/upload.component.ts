import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataModel} from '../../data.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @ViewChild('fileUploadInput')
  fileUploadInput: any;

  @Input()
  dataModelList: DataModel[];

  logObject: any;

  constructor() { }

  ngOnInit() {
  }

  getbindHeadersDataModelListArray(headers){
    
    return headers;
  }

  selectFile($event) {
    const fileList = $event.srcElement.files;
    const file = fileList[0];
    if (file && file.name.endsWith('.csv')) {
      const input = $event.target;
      const reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = (data) => {
        const csvData = reader.result;

        const csvRecordArray = csvData.split(/\r\n|\n/);
        const headers = csvRecordArray && csvRecordArray.length > 0 ? csvRecordArray[0].split(';') : [];

        const bindArray = this.getbindHeadersDataModelListArray(headers);

        this.logObject = bindArray;
      };
    }
  }

}
