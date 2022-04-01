import { Component, OnInit } from '@angular/core';
import { Company } from 'app/global/interfaces/company.inteface';
import { ForumQuestion } from 'app/global/interfaces/forum.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  questions: ForumQuestion[] = [];
  companies: Company[] = [];

  constructor() {}

  ngOnInit(): void {
    this.setQuestions();
    this.setCompanies();
  }

  setQuestions(): void {
    this.questions = [
      {
        question: '¿Cuál es el mejor lugar para hacer exportaciones?',
        user: {
          name: 'David García',
          email: 'david@correo.com',
        },
        answers: [
          {
            answer:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aspernatur! Facilis minima laudantium quod voluptatibus odio, voluptatem, numquam tempora sunt, nemo exercitationem corporis a tempore amet culpa natus accusamus cupiditate! ',
            user: {
              name: 'Mateo Roldán',
            },
          },
          {
            answer:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aspernatur! Facilis minima laudantium quod voluptatibus odio, voluptatem, numquam tempora sunt, nemo exercitationem corporis a tempore amet culpa natus accusamus cupiditate! ',
            user: {
              name: 'Juan Esteban Cendales',
            },
          },
        ],
      },
      {
        question:
          '¿Qué empresas me recomiendan para transportar mis productos?',
        user: {
          name: 'Santiago Espinosa',
          email: 'santiago@correo.com',
        },
        answers: [
          {
            answer:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aspernatur! Facilis minima laudantium quod voluptatibus odio, voluptatem, numquam tempora sunt, nemo exercitationem corporis a tempore amet culpa natus accusamus cupiditate! ',
            user: {
              name: 'David García',
            },
          },
          {
            answer:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aspernatur! Facilis minima laudantium quod voluptatibus odio, voluptatem, numquam tempora sunt, nemo exercitationem corporis a tempore amet culpa natus accusamus cupiditate! ',
            user: {
              name: 'Juanita Pérez',
            },
          },
        ],
      },
    ];
  }

  setCompanies(): void {
    this.companies = [
      {
        name: 'Exportadora de colombia SAS',
        rate: 4.5,
      },
      {
        name: 'DHL',
        rate: 4,
      },
      {
        name: 'Transportadora de mercancías',
        rate: 4.6,
      },
    ];
  }
}
