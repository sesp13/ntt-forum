import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchComponent } from './pages/match/match.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MatchComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchingRoutingModule {}
