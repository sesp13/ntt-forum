import { Component, OnInit } from '@angular/core';
import { ForumAnwser, ForumQuestion } from 'app/global/interfaces/forum.interface';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {

  questions: ForumQuestion[] = [
    {
      question: '¿ Pregunta 1 ?',
      reactions: 50
    },
    {
      question: '¿Pregunta 2?',
      reactions: 25
    },
    {
      question: '¿Pregunta 3?',
      reactions: 10
    }
  ];

  answers:ForumAnwser[] =  [
    {
      answer: 'Puedes mirar muchas ofertas y cosas geniales por acá!!!'
    },
    {
      answer: 'Esta es otra manera de poder trabajar'
    },
    {
      answer: 'Te recomiendo que vayas al centro de la ciudad a mirar más compañías'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
