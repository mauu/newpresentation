import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CjLibModule } from 'cjlib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbpHeaderComponent } from 'cjlib';
import { NbpFooterComponent } from 'cjlib';

@NgModule({
  declarations: [
    AppComponent
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
