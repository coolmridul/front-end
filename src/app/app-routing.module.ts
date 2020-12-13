import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './common/landing/landing.component';
import { PairtradeComponent } from './strategy/pairtrade/pairtrade.component';
import { IntradayComponent } from './strategy/intraday/intraday.component';
import { BearishComponent } from './strategy/bearish/bearish.component';


const routes: Routes = [
  { path: 'home' , component: LandingComponent},
  { path: 'pairtrading', component: PairtradeComponent},
  { path: 'intraday', component: IntradayComponent},
  { path: 'bearish', component: BearishComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
