import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CjLibModule } from 'cjlib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementiComponent } from './elementi/elementi.component';
import { HomeComponent } from './home/home.component';
import { PosComponent } from './pos/pos.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementiComponent,
    HomeComponent,
    PosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    CjLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
