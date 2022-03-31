import { Component, OnInit } from '@angular/core';
import { Company } from 'app/global/interfaces/company.inteface';

@Component({
  selector: 'app-company-public-profile',
  templateUrl: './company-public-profile.component.html',
  styleUrls: ['./company-public-profile.component.css'],
})
export class CompanyPublicProfileComponent implements OnInit {
  company: Company = {
    name: 'Exportadora de Colombia SAS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat sit placeat mollitia repellat aliquid reiciendis, pariatur maiores saepe alias dolorum nemo optio voluptatum blanditiis sunt odio voluptate vel temporibus.',
  };

  constructor() {}

  ngOnInit(): void {}
}
