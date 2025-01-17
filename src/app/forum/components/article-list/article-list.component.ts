import { Component, Input, OnInit } from '@angular/core';
import { ForumQuestion } from 'app/global/interfaces/forum.interface';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  @Input() question: ForumQuestion = {};

  constructor() {}

  ngOnInit(): void {}
}
