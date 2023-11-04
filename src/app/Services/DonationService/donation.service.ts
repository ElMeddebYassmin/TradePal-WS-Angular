import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donation } from 'app/models/Donation';
import { environment } from 'environments/environment';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DonationService {


  donations:Donation[]=[];
  url = environment.baseUrl+'/donation';
  constructor(private http: HttpClient) { }

   /********************************Get Donations By Category************************************/
   getDonationsByCategory(donationCategory:string):Observable<any>{
    return this.http.get<Donation>(this.url+"/"+donationCategory);
  }

  /********************************Get Donations By Organization's Category************************************/
  getDonationsByOrganizationCategory(donationCategory:string, OrgCategory:string):Observable<any>{
    return this.http.get<Donation>(this.url+"/"+donationCategory+"/"+OrgCategory);
  }

    /********************************Get All Donations************************************/
    getDonations():Observable<any>{
      return this.http.get<Donation>(this.url+"/getAllDonations");
    }
}
