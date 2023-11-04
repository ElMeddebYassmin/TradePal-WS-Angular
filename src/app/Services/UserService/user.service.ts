import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/models/User';
import { environment } from 'environments/environment';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[]=[];
  url = environment.baseUrl+'/person';
  constructor(private http: HttpClient) { }

    /********************************Get All Users************************************/
    getAllUsers():Observable<any>{
      return this.http.get<User>(this.url+"/Users");
    }
  
    /********************************Get All Admins************************************/
    getAllAdmins():Observable<any>{
      return this.http.get<User>(this.url+"/Admins");
    }

    /********************************Get User By Username************************************/
    getUsersByUsername(username:string):Observable<any>{
      return this.http.get<User>(this.url+"/User/"+username);
    }

    


}
