import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatchingRoutingModule } from './matching-routing.module';

import { MatchComponent } from './pages/match/match.component';

@NgModule({
  declarations: [MatchComponent],
  imports: [CommonModule, MatAutocompleteModule, MatchingRoutingModule],
})
export class MatchingModule {}
