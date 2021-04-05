import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/classes/question';
import { NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss']
})
export class QuestionEditorComponent implements OnInit {

  question=new Question()
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private qs:QuestionService,
    private router:Router,
    private http:HttpClient
    ) { }

  ngOnInit(): void {
    this.qs.getAll();
    this.ActivatedRoute.params.subscribe(e=>this.qs.get(e.id).subscribe(e=>this.question=e))}

  onUpdate(from:NgForm):void{
    if (this.question.id==0){this.qs.create(this.question).subscribe(e=>this.qs.getAll())} else
    this.qs.update(this.question).subscribe(e=>this.qs.getAll());
    this.router.navigate(["question"])}
}
