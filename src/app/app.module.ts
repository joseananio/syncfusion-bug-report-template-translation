import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import the TreeGridModule for the TreeGrid component
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent }  from './app.component';
import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TreeGridModule,
    TranslateModule.forRoot(),
  ],
  providers: [{
    useClass: TranslateService,
    provide: TranslateService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
