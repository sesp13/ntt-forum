import { Component, OnInit } from '@angular/core';
import { Company } from 'app/global/interfaces/company.inteface';
import { ForumQuestion } from 'app/global/interfaces/forum.interface';
import { User } from 'app/global/interfaces/user.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  questions: ForumQuestion[] = [];
  companies: Company[] = [];

  commonUser1: User = {
    name: 'David García',
    email: 'david@correo.com',
    image: 'assets/img/faces/DGB.png'
  }

  commonUser2: User = {
    name: 'Santiago Espinosa',
    email: 'santiago@correo.com',
    image: 'assets/img/faces/SESP13.png'
  }


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
        user: this.commonUser1,
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
          '¿Cómo exportar café?',
        image:
          'https://www.ubicalo.com.mx/wp-content/uploads/2020/05/original-bcb8dfae789303136afad728286b86fe.jpeg',
        category: 'Transporte',
        user: this.commonUser2,
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
      {
        question:
          '¿Cómo exportar café?',
        image:
          'https://www.semana.com/resizer/rH4_rbif0fmvefux9P8yPeuPOhA=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/EMVX56K62JCS7J3BH2M4BA33RU.jpg',
        category: 'Transporte',
        user: this.commonUser1,
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
        name: 'Magnum',
        rate: 4.6,
        image: 'assets/img/companies/Magnum.png'
      },
      {
        name: 'DHL',
        rate: 4.5,
        image: 'assets/img/companies/DHL.png'
      },
      {
        name: 'TCC',
        rate: 4,
        image: 'assets/img/companies/TCC.png'
      },
    ];
  }
}
