import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { teacher } from 'src/app/model/teacher';
import { ApifunctionService } from 'src/app/shared/apifunction.service';


@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {

  constructor( private serv : ApifunctionService , private router : Router) { }

  model = new teacher;
  ngOnInit(): void {
  }
  save(){
    this.serv.post(this.model).subscribe( data =>{
  this.router.navigateByUrl('lt')

    })
  }

}
