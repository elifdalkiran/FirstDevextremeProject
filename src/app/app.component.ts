import {Component, enableProdMode, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
import {Company, Service} from './app.service';


if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service]
})
export class AppComponent {
  company: Company [];
  dataSource: Company[];

  constructor(service: Service) {
    this.company = service.getCompany();
    this.dataSource = service.getData();
  }
  onPointClick(e) {
    e.target.select();
  }
}

