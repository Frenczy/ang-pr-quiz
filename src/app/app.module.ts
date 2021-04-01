import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { QuizEditorComponent } from './components/quiz-editor/quiz-editor.component';
import { QuestionEditorComponent } from './components/question-editor/question-editor.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    QuizEditorComponent,
    QuestionEditorComponent,
    QuizComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
