import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DatacreditLibModule } from '@bdb/datacredit';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DatacreditLibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
