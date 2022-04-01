import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { ForumRoutingModule } from './forum-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, ForumRoutingModule],
})
export class ForumModule {}
