import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { ForumRoutingModule } from './forum-routing.module';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { CompanyListComponent } from './components/company-list/company-list.component';

@NgModule({
  declarations: [MainComponent, ArticleListComponent, CompanyListComponent],
  imports: [CommonModule, ForumRoutingModule],
})
export class ForumModule {}
