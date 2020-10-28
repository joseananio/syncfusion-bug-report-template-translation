import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
// import { DataManager,WebApiAdaptor } from '@syncfusion/ej2-data';
import { sampleData } from './datasource';
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';

interface TaskStatus {
  name: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // public data: DataManager;
  public data: Object[];

  public treeColumnIndex = 0;

  @ViewChild('treegrid')
  public treegrid: TreeGridComponent;

  constructor(
    private translateService: TranslateService,
  ) {
    this.translateService.addLangs(['de', 'en']);
    this.translateService.setDefaultLang('en');
    translateService.use('en');
  }

  ngOnInit(): void {
    // this.data = new DataManager({
    //   url: 'https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData',
    //   adaptor: new WebApiAdaptor, crossDomain: true
    //   });

    this.data = sampleData;

    // very artificial async simulation
    this.translateService.onLangChange.subscribe((langId: string) => {
      this.data = [];
      setTimeout(() => {
        this.data = sampleData;
      }, 1000);
    });

    this.treeColumnIndex = this.getPreviousTreeColumnIndex();
  }

  getStatus(taskStatus: number) {
    switch (taskStatus) {
      case 1:
        return 'GLOBAL.TASK_STATUS_DONE';
      case 2:
        return 'GLOBAL.TASK_STATUS_CANCELLED';
      case 0:
      default:
        return 'GLOBAL.TASK_STATUS_PENDING';
    }
  }

  getPreviousTreeColumnIndex(): number {
    const index = localStorage.getItem('treeColumnIndex');
    return index ? parseInt(index, 10) : 1;
  }

  setTreeColumnIndex(index: number): void {
    localStorage.setItem('treeColumnIndex', index.toString());
    window.location.reload();
  }
}
