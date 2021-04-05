import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from 'src/app/classes/student';
import { Quiz } from 'src/app/classes/quiz';
import { QuizService } from 'src/app/services/quiz.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizzes$:BehaviorSubject<Quiz[]>=this.qs.list$
  constructor(private qs: QuizService) { }

  ngOnInit(): void {this.qs.getAll()}

  deleteQuiz(quiz:Quiz):void{this.qs.remove(quiz).subscribe(e=>this.qs.getAll())}

}