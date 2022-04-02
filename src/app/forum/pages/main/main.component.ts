import { Component, OnInit } from '@angular/core';
import { Company } from 'app/global/interfaces/company.inteface';
import { ForumQuestion } from 'app/global/interfaces/forum.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
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
        image: 'assets/img/comercio-cover.jpg',
        category: 'Exportaciones',
        user: {
          name: 'David García',
          email: 'david@correo.com',
          image: 'assets/img/DGB.png'
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
        image:
          'https://www.ubicalo.com.mx/wp-content/uploads/2020/05/original-bcb8dfae789303136afad728286b86fe.jpeg',
        category: 'Transporte',
        user: {
          name: 'Santiago Espinosa',
          email: 'santiago@correo.com',
          image: 'assets/img/faces/SESP13.png'
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
