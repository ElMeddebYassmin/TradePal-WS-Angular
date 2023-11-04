import { HttpClient } from '@angular/common/http';
import { Request } from './../../models/Request';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  Request:Request[]=[];
 
  url=environment.baseUrl+'/requests';

  constructor(private http: HttpClient) { }

 
 

  /********************************Get Object************************************/
  getAllRequests(): Observable<Request[]>{
    return this.http.get<Request[]>(this.url+'/getRequests') 
  
  }
  getRequestsByDesiredAndExchangeable(desired: string, exchangeable: string): Observable<any> {
    return this.http.get(`${this.url}/getRequestsByDesiredObject/${desired}/${exchangeable}`);
  }

  
}


