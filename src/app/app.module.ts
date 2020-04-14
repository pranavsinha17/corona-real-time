import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiaStatsComponent } from './india-stats/india-stats.component';
import {HttpClientModule} from '@angular/common/http';
import { StateWiseStatComponent } from './state-wise-stat/state-wise-stat.component';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { AboutMeComponent } from './about-me/about-me.component';
import { FaqComponentComponent } from './faq-component/faq-component.component';
import { MaterialElevationDirective } from './material-elevation.directive';
@NgModule({
  declarations: [
    AppComponent,
    IndiaStatsComponent,
    StateWiseStatComponent,
    AboutMeComponent,
    FaqComponentComponent,
    MaterialElevationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
