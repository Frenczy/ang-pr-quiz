import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { QuizEditorComponent } from './components/quiz-editor/quiz-editor.component';
import { QuestionEditorComponent } from './components/question-editor/question-editor.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StudentEditorComponent } from './components/student-editor/student-editor.component';
import { StudentComponent } from './components/student/student.component'

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"navigation", component:NavigationComponent},
  {path:"admin", component:AdminComponent},
  {path:"admin/:id", component:StudentEditorComponent},
  {path:"student", component:StudentComponent},
  {path:"student/:id", component:StudentEditorComponent},
  {path:"question", component:QuestionEditorComponent},
  {path:"question/:id", component:QuestionEditorComponent},
  {path:"quiz", component:QuizComponent},
  {path:"quiz/:id", component:QuizEditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
