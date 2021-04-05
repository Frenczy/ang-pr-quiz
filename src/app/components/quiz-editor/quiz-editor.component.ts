import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from 'src/app/classes/quiz';
import { NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz-editor',
  templateUrl: './quiz-editor.component.html',
  styleUrls: ['./quiz-editor.component.scss']
})
export class QuizEditorComponent implements OnInit {

  quiz=new Quiz()
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private qs:QuizService,
    private router:Router,
    private http:HttpClient
    ) { }

  ngOnInit(): void {
    this.qs.getAll();
    this.ActivatedRoute.params.subscribe(e=>this.qs.get(e.id).subscribe(e=>this.quiz=e))}

  onUpdate(from:NgForm):void{
    if (this.quiz.id==0){this.qs.create(this.quiz).subscribe(e=>this.qs.getAll())} else
    this.qs.update(this.quiz).subscribe(e=>this.qs.getAll());
    this.router.navigate(["quiz"])}
}
