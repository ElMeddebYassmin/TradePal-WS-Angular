import { Injectable } from '@angular/core';
import {Blog} from "../../models/Blog";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs:Blog[]=[];
  urlApi=environment.baseUrl+'/blog';

  constructor(private http: HttpClient) { }


  /********************************Get Blogs************************************/
  getAllBlogs(): Observable<any[]>{
    return this.http.get<any[]>(this.urlApi+'/getAllBlogs')
    }

    /********************************Get Blogs By Category************************************/
  getBlogsByCategory(blogCategory:string): Observable<Blog[]>{
    return this.http.get<Blog[]>(this.urlApi+'/'+blogCategory)
  }

  

     /********************************Get Blogs By Category************************************/
  getBlogsByA( username:string): Observable<any[]>{
    return this.http.get<any[]>(this.urlApi+'/au/'+username)
  }
  
    /********************************Get Blogs By Category and Author************************************/
    getBlogsByCategoryAndAuthor(username:string, blogCategory:string): Observable<Blog[]>{
      return this.http.get<Blog[]>(this.urlApi+'/u/'+username+'/b1/'+blogCategory)
    }

}
