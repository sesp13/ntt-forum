import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { LbdModule } from '../lbd/lbd.module';

// Routing
import { AdminLayoutRoutes } from './admin-layout.routing';

// Components
import { HomeComponent } from 'app/layouts/pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { TablesComponent } from 'app/tables/tables.component';
import { TypographyComponent } from 'app/typography/typography.component';
import { IconsComponent } from 'app/icons/icons.component';
import { NotificationsComponent } from 'app/notifications/notifications.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { QuestionDetailComponent } from './pages/question-detail/question-detail.component';
import { PublicProfileComponent } from './pages/public-profile/public-profile.component';
import { CompanyPublicProfileComponent } from './pages/company-public-profile/company-public-profile.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    ActionButtonsComponent,
    QuestionDetailComponent,
    PublicProfileComponent,
    CompanyPublicProfileComponent,
    AboutComponent,
  ],
})
export class AdminLayoutModule {}
