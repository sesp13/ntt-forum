import { Component, OnInit } from '@angular/core';
import { DummieCompany1 } from 'app/global/consts/example-companies';
import { Company } from 'app/global/interfaces/company.inteface';

@Component({
  selector: 'app-company-public-profile',
  templateUrl: './company-public-profile.component.html',
  styleUrls: ['./company-public-profile.component.css'],
})
export class CompanyPublicProfileComponent implements OnInit {
  company: Company = DummieCompany1;

  constructor() {}

  ngOnInit(): void {}
}
