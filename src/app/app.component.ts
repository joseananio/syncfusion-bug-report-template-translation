import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { TreeGridComponent } from "@syncfusion/ej2-angular-treegrid";
// import { DataManager,WebApiAdaptor } from '@syncfusion/ej2-data';
import { sampleData } from './datasource';
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // public data: DataManager;
  public data: Object[];

  @ViewChild('treegrid')
  public treegrid: TreeGridComponent;

  constructor(
    // private translateService: TranslateService,
  ) {

  }

  ngOnInit(): void {
    // this.data = new DataManager({
    //   url: 'https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData',
    //   adaptor: new WebApiAdaptor, crossDomain: true
    //   });

    this.data = sampleData;
  }
}
