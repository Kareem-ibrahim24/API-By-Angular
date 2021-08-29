import { ApifunctionService } from './../../shared/apifunction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent  {

  alldata=[];
  constructor(private serv : ApifunctionService){


    this.serv.get().subscribe( (data :any) =>{

    this.alldata = data;
    })

  }

  delete(id){
    this.serv.delete(id).subscribe(data =>{
      location.reload();
    })

  }


}
