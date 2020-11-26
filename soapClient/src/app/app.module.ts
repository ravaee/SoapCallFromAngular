import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSoapModule, NgxSoapService } from 'ngx-soap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSoapModule
  ],
  providers: [NgxSoapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
