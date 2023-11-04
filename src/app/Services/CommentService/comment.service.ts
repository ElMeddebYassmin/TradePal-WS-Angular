import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from 'app/models/Comment';
import { environment } from 'environments/environment';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  comments:Comment[]=[];
  url = environment.baseUrl+'/comment';
  constructor(private http: HttpClient) { }

   /********************************Get All Comments************************************/
   getAllComments():Observable<any>{
    return this.http.get<Comment>(this.url+"/all");
  }

  /********************************Get Comments By Author************************************/
  getCommentsByAuthor(author:string):Observable<any>{
    return this.http.get<Comment>(this.url+"/"+author);
  }

}