import { Injector, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatTableModule
  ],
  providers: [],  
  bootstrap: []
})

export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const custom = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('angular-sub-mfe-user', custom);
  }
  
  
 }
