import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DxChartModule, DxDataGridModule} from 'devextreme-angular';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@NgModule({
  imports:[
    BrowserModule,
    DxDataGridModule,
    DxChartModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

