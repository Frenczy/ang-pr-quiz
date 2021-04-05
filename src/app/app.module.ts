import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { QuizEditorComponent } from './components/quiz-editor/quiz-editor.component';
import { QuestionEditorComponent } from './components/question-editor/question-editor.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StudentEditorComponent } from './components/student-editor/student-editor.component';
import { StudentComponent } from './components/student/student.component';
import { QuestionComponent } from './components/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    QuizEditorComponent,
    QuestionEditorComponent,
    QuizComponent,
    HomeComponent,
    NavigationComponent,
    StudentEditorComponent,
    StudentComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
