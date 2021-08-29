import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';
import { NavbarComponent } from './genaral/navbar/navbar.component';
import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './genaral/home/home.component';
import { CreateTeacherComponent } from './teacher/create-teacher/create-teacher.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';



const routes: Routes = [
   { path:"home" , component: HomeComponent},
   { path:"" , component: HomeComponent},
   { path:"lt" , component: ListTeacherComponent},
   { path:"Ct" , component: CreateTeacherComponent},
   { path:"nav" , component:NavbarComponent},
   { path:"up/:id" , component:UpdateTeacherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
