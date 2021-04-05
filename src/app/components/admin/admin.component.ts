import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from 'src/app/classes/student';
import { Quiz } from 'src/app/classes/quiz';
import { Question } from 'src/app/classes/question';
import { QuizService } from 'src/app/services/quiz.service';
import { QuestionService } from 'src/app/services/question.service';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  quizzes$:BehaviorSubject<Quiz[]>=this.qs.list$
  students$:BehaviorSubject<Student[]>=this.ss.list$
  questions$:BehaviorSubject<Question[]>=this.qus.list$
  constructor(private ss: StudentService, private qs: QuizService, private qus: QuestionService, private router:Router, private ar:ActivatedRoute) { }

  ngOnInit(): void {this.ss.getAll(); this.qs.getAll(); this.qus.getAll()}

  deleteStudent(student:Student):void{this.ss.remove(student).subscribe(e=>this.ss.getAll())}
  deleteQuiz(quiz:Quiz):void{this.qs.remove(quiz).subscribe(e=>this.qs.getAll())}
  /* routeQuiz(quiz:Quiz):void{this.router.navigate(["quizzes/:id"])} */
  routeQuiz(quiz:Quiz):void{this.router.navigateByUrl(`http://localhost:4200/quizzes`)}
  
}
