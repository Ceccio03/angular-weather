import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MeteoChartComponent } from './components/meteo-chart/meteo-chart.component';
import { MeteoTableComponent } from './components/meteo-table/meteo-table.component'

@NgModule({
  declarations: [
    AppComponent,
    MeteoChartComponent,
    MeteoTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
