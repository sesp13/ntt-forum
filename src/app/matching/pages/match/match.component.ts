import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { countryList } from 'app/global/consts/countries.const';
import { SearchConfig } from 'app/matching/interfaces/search-match.inteface';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],
})
export class MatchComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    weeks: [2],
    costs: [1000],
  });
  step: number = 3;

  productConfig: SearchConfig = {
    label: 'Productos a importar / exportar',
    options: [
      '08101000 - Fresas(frutillas), frescas',
      '930510400 - Frenos, pistones, pasadores y amortiguadores',
    ],
    placeholder: 'Digita un producto',
  };

  originConfig: SearchConfig = {
    label: 'País de origen',
    options: countryList,
    placeholder: 'Escoge un país de origen',
  };

  depatureConfig: SearchConfig = {
    label: 'País de destino',
    options: countryList,
    placeholder: 'Escoge un país de destino',
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  changeStep(value: number) {
    this.step += value;
  }
}
