
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { CreateTeacherComponent } from './teacher/create-teacher/create-teacher.component';
import { NavbarComponent } from './genaral/navbar/navbar.component';
import { HomeComponent } from './genaral/home/home.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';
@NgModule({
  declarations: [
    AppComponent,
    ListTeacherComponent,
    CreateTeacherComponent,
    NavbarComponent,
    HomeComponent,
    UpdateTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
