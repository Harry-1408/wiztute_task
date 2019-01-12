import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FaqComponent } from './faq/faq.component';
import { FAQService } from './faq/faq.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule, HttpModule 
  ],
  providers: [FAQService],
  bootstrap: [AppComponent]
})
export class AppModule { }
