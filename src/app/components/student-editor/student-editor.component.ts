import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/classes/student';
import { NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-editor',
  templateUrl: './student-editor.component.html',
  styleUrls: ['./student-editor.component.scss']
})
export class StudentEditorComponent implements OnInit {

  student=new Student()
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private ss:StudentService,
    private router:Router,
    private http:HttpClient
    ) { }

  ngOnInit(): void {
    this.ss.getAll();
    this.ActivatedRoute.params.subscribe(e=>this.ss.get(e.id).subscribe(e=>this.student=e))}

  onUpdate(from:NgForm):void{
    if (this.student.id==0){this.ss.create(this.student).subscribe(e=>this.ss.getAll())} else
    this.ss.update(this.student).subscribe(e=>this.ss.getAll());
    this.router.navigate(["student"])}
}
