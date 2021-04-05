import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from 'src/app/classes/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  questions$:BehaviorSubject<Question[]>=this.qs.list$
  
  constructor(private qs: QuestionService) { }

  ngOnInit(): void {this.qs.getAll()}

  deleteQuestion(question:Question):void{this.qs.remove(question).subscribe(e=>this.qs.getAll())}
  
}
