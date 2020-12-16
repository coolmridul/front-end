import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { LandingComponent } from './common/landing/landing.component';
import { PairtradeComponent } from './strategy/pairtrade/pairtrade.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './strategy/pairtrade/components/table/table.component';
import { IntradayComponent } from './strategy/intraday/intraday.component';
import { BearishComponent } from './strategy/bearish/bearish.component';
import { EarningComponent } from './strategy/earning/earning.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    PairtradeComponent,
    TableComponent,
    IntradayComponent,
    BearishComponent,
    EarningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
