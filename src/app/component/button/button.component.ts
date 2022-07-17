import { Component, OnInit } from '@angular/core';
import { Icountry } from 'src/app/shared/interface/data';
import { CountriesService } from 'src/app/shared/services/countries.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  countrieArray : Icountry[] = [];
  constructor(private countriesService : CountriesService) { }

  ngOnInit(): void {
  }

  onClickHandler(name:string){
    this.countrieArray = this.countriesService.getCountriesArray();
    
    console.log(this.countrieArray);
    let ascendingNames = this.countrieArray.map(country => country.name);
    console.log(ascendingNames);
    
    
    
  }
}
