import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchConfig } from 'app/matching/interfaces/search-match.inteface';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Input() config: SearchConfig = {
    label: '',
    options: [],
    placeholder: ''
  }
  
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.config.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
