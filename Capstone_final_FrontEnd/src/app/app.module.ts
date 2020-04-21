import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { CustomMaterialModule } from './material.module'

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { QuizComponent } from './quiz/quiz.component';
import { ToastrModule } from 'ngx-toastr';
import { QuizFrontComponent } from './quiz-front/quiz-front.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TeamComponent,
    ContactComponent,
    AboutComponent,
    AdminhomeComponent,
    QuizComponent,
    QuizFrontComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // CustomMaterialModule,
    ToastrModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
