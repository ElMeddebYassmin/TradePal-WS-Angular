import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemCategory, Object } from 'app/models/Object';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {
  object:Object[]=[];
  categories:ItemCategory[]=[];
  url=environment.baseUrl+'/items';

  constructor(private http: HttpClient) { }

 
 

  /********************************Get Object************************************/
  getAllObjects(): Observable<Object[]>{
    return this.http.get<Object[]>(this.url+'/getItems') 
  
  }
  getAllCategories(): Observable<ItemCategory[]>{
    return this.http.get<ItemCategory[]>(this.url+'/getCategoryItems') 
  
  }

  getItemsByStatus(status: string): Observable<any> {
    return this.http.get(`${this.url}/getItemsByStatus/${status}`);
  }
  getItemsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.url}/getItemsByCategory/${category}`);
  }
}


