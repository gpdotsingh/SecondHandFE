import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogCardetailsComponent } from './dialog-cardetails/dialog-cardetails.component';
import { ShoppingKartComponent } from './shopping-kart/shopping-kart.component';
import { CarDetaiilsPipe } from './pipe/car-detaiils.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    DialogCardetailsComponent,
    ShoppingKartComponent,
    CarDetaiilsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
