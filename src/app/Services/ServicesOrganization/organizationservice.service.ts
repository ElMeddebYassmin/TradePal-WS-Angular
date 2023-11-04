import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Organization } from 'app/models/Organization';
import { environment } from 'environments/environment';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class OrganizationserviceService {
  organizations:Organization[]=[];
  
  url = environment.baseUrl+'/organization';
  constructor(private http: HttpClient) { }

 
  /********************************Get Organizations By Category************************************/
  getOrganizationsByCategory(category:string):Observable<any>{
    return this.http.get<Organization>(this.url+"/"+category);
  }

    /********************************Get All Organizations************************************/
    getOrganizations():Observable<any>{
      return this.http.get<Organization>(this.url+"/getAllOrgs");
    }

}