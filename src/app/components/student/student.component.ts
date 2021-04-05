import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from 'src/app/classes/student';
import { Quiz } from 'src/app/classes/quiz';
import { QuizService } from 'src/app/services/quiz.service';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  students$:BehaviorSubject<Student[]>=this.ss.list$
  constructor(private ss: StudentService, private router:Router, private ar:ActivatedRoute) { }

  ngOnInit(): void {this.ss.getAll()}

  deleteStudent(student:Student):void{this.ss.remove(student).subscribe(e=>this.ss.getAll())}
  routeStudent(quiz:Quiz):void{this.router.navigate(["student/1"])}
  routeStudentURL(student:Student):void{this.router.navigateByUrl(`http://localhost:4200/student`)}
}
