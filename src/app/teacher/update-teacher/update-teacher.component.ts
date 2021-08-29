import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { teacher } from 'src/app/model/teacher';
import { ApifunctionService } from 'src/app/shared/apifunction.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {
  model = new teacher;
  id;
  constructor(private serv : ApifunctionService , private actvroute: ActivatedRoute
    , private router:Router) {
   this.id=this.actvroute.snapshot.paramMap.get('id');
   this.serv.getbyid(this.id).subscribe((data:any)=>{

    this.model = data;

   })

  }

  ngOnInit(): void {
  }
  update(){
  this.serv.put(this.model,this.id ).subscribe(data=>{

  this.router.navigateByUrl('lt');
  })
  }

}
