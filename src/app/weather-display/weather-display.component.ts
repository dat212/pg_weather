import { Component, OnInit } from '@angular/core';
import { WetherService } from '../wether.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {

  public weatherSearchForm: FormGroup;

  constructor(private weatherService: WetherService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }


  getWeather(formValues) {
    this.weatherService.getWeather(formValues.location).subscribe(res => console.log(res));
  }

}
