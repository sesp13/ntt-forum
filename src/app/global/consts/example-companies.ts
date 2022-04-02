import { Company } from '../interfaces/company.inteface';

export const DhlCompany: Company = {
  name: 'DHL',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat sit placeat mollitia repellat aliquid reiciendis, pariatur maiores saepe alias dolorum nemo optio voluptatum blanditiis sunt odio voluptate vel temporibus.',
  rate: 4.5,
  image: 'assets/img/companies/DHL.png',
};

export const MagnumCompany: Company = {
  name: 'Magnum',
  rate: 4.6,
  image: 'assets/img/companies/Magnum.png',
};

export const TccCompany: Company = {
  name: 'TCC',
  rate: 4,
  image: 'assets/img/companies/TCC.png',
};

export const DummieCompany1 = {
  name: 'Exportadora de Colombia SAS',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat sit placeat mollitia repellat aliquid reiciendis, pariatur maiores saepe alias dolorum nemo optio voluptatum blanditiis sunt odio voluptate vel temporibus.',
  rate: 4.5,
  users: [
    {
      name: 'David García',
      email: 'davidG@email.com',
    },
    {
      name: 'Mateo Roldán',
      email: 'mateoRoldan@email.com',
    },
    {
      name: 'Juan Esteban Cendales',
      email: 'juanes@email.com',
    },
  ],
};
