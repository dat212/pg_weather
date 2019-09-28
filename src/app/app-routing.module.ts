import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { WeatherDisplayComponent } from './weather-display/weather-display.component';

const routes: Routes = [
  {path: 'weather', component: WeatherDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
