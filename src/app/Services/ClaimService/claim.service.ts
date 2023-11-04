import { Injectable } from '@angular/core';
import {Response} from '../../models/Response';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Claim} from '../../models/Claim';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  claims:Claim[]=[];
  urlApi=environment.baseUrl+'/Claim';

  constructor(private httpClient:HttpClient) { }

  /********************************Get Claims************************************/
  getAllClaims(): Observable<Claim[]>{

    return this.httpClient.get<Claim[]>(this.urlApi+'/getAllClaims')
  }

  /********************************Get Claims By Status************************************/
  getClaimByStatus(status : string): Observable<Claim[]>{
    const params = new HttpParams().set('status', status);
    return this.httpClient.get<Claim[]>(this.urlApi+'/ClaimsByStatus', {params})
  }

  /********************************Get Claims By Subject************************************/
  getClaimBySubject(subject : string): Observable<Claim[]>{
    const params = new HttpParams().set('subject', subject);
    return this.httpClient.get<Claim[]>(this.urlApi+'/ClaimByName', {params})
  }

}
