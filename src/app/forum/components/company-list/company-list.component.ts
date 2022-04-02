import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  @Input() companyName: string;
  @Input() companyRate: number;
  @Input() companyImage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
