import { Component, OnInit } from '@angular/core';
import { Icountry } from './shared/interface/data';
import { CountriesService } from './shared/services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'CountryTask';
  countriesArray: Icountry[] = [];
  constructor(private countriesService : CountriesService ){}

  ngOnInit(): void {
    this.countriesArray = this.countriesService.getCountriesArray();
  }
}
