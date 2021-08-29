import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApifunctionService {

  configUrl="http://localhost:3000/teacher";
  constructor( private http : HttpClient) { }

  get(){
    return this.http.get(this.configUrl);
  }
  getbyid(id){
    return this.http.get(this.configUrl + `/${id}`);
  }

  post(model){
    return this.http.post(this.configUrl,model);
  }

  delete(id){
    return this.http.delete(this.configUrl + `/${id}`);
  }
  put(model,id){
    return this.http.put(this.configUrl + `/${id}`,model)
  }

}
