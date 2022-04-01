import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() category: string = '';
  @Input() userName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
