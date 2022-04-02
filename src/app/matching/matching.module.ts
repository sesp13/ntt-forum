import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchingRoutingModule } from './matching-routing.module';

import { MatchComponent } from './pages/match/match.component';

@NgModule({
  declarations: [MatchComponent],
  imports: [CommonModule, MatchingRoutingModule],
})
export class MatchingModule {}
