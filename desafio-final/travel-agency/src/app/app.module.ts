import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetTravelInformationsComponent } from './get-travel-informations/get-travel-informations.component';
import { ShowTravelInformationsComponent } from './show-travel-informations/show-travel-informations.component';

@NgModule({
  declarations: [
    AppComponent,
    GetTravelInformationsComponent,
    ShowTravelInformationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
