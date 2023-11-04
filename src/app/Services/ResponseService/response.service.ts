import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../../models/Response';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  responses:Response[]=[];
  urlApi=environment.baseUrl+'/Response';

  constructor(private httpClient:HttpClient) { }

  /********************************Get Responses************************************/
  getAllResponses(): Observable<Response[]>{

    return this.httpClient.get<Response[]>(this.urlApi+'/getAllResponses')
  }

  /********************************Get Responses************************************/
  getAllResponsesByType(className : string): Observable<Response[]>{
    const params = new HttpParams().set('className', className);
    return this.httpClient.get<Response[]>(this.urlApi+'/ResponsesByResponderName', {params})
  }
}
