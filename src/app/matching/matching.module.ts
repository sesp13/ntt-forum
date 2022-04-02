import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


import { MatchingRoutingModule } from './matching-routing.module';

import { MatchComponent } from './pages/match/match.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [MatchComponent, SearchBarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatchingRoutingModule,
  ],
})
export class MatchingModule {}
