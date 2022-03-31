import { Component, OnInit } from '@angular/core';
import { ForumQuestion } from 'app/global/interfaces/forum.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  questions: ForumQuestion[] = [];

  constructor() {}
  ngOnInit() {
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
            }
          },
          {
            answer:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aspernatur! Facilis minima laudantium quod voluptatibus odio, voluptatem, numquam tempora sunt, nemo exercitationem corporis a tempore amet culpa natus accusamus cupiditate! ',
            user: {
              name: 'Juan Esteban Cendales',
            }
          },
        ],
      },
      {
        question: '¿Qué empresas me recomiendan para transportar mis productos?',
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
            }
          },
          {
            answer:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aspernatur! Facilis minima laudantium quod voluptatibus odio, voluptatem, numquam tempora sunt, nemo exercitationem corporis a tempore amet culpa natus accusamus cupiditate! ',
            user: {
              name: 'Juanita Pérez',
            }
          },
        ],
      },
    ];
  }
}
