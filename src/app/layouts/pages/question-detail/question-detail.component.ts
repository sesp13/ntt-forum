import { Component, OnInit } from '@angular/core';
import { ForumQuestion } from 'app/global/interfaces/forum.interface';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
})
export class QuestionDetailComponent implements OnInit {
  question: ForumQuestion = {
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
          email: 'david@correo.com'
        },
      },
      {
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aspernatur! Facilis minima laudantium quod voluptatibus odio, voluptatem, numquam tempora sunt, nemo exercitationem corporis a tempore amet culpa natus accusamus cupiditate! ',
        user: {
          name: 'Juanita Pérez',
          email: 'juanita@correo.com'
        },
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
