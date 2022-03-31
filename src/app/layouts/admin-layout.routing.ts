import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from '../user/user.component';
import { TablesComponent } from '../tables/tables.component';
import { TypographyComponent } from '../typography/typography.component';
import { IconsComponent } from '../icons/icons.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { MatchComponent } from './pages/match/match.component';
import { QuestionDetailComponent } from './pages/question-detail/question-detail.component';
import { PublicProfileComponent } from './pages/public-profile/public-profile.component';
import { CompanyPublicProfileComponent } from './pages/company-public-profile/company-public-profile.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'table', component: TablesComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'match', component: MatchComponent },
  { path: 'question', component: QuestionDetailComponent },
  { path: 'public-profile', component: PublicProfileComponent },
  { path: 'company-public-profile', component: CompanyPublicProfileComponent },
];
