import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from 'app/models/Event';
import {catchError, delay, Observable, of, retry, throwError} from 'rxjs';
//import { getSystemErrorMap } from 'util'; 
import {NgForm} from '@angular/forms';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import {Participation} from '../../models/Participation';
//import * as http from 'http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  equipes:Event[]=[];
  participations:Participation[]=[]

  constructor(private http: HttpClient) { }
  urlApi=environment.baseUrl;
 

  /********************************Get Equipe************************************/
  getEquipes(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:8005/TradePal/Event/getAll');
  }

  getParticipations(): Observable<Participation[]> {
    return this.http.get<Participation[]>('http://localhost:8005/TradePal/Event/getParticipations');
  }
  getEventsByLocation(location: string) {
    const url = 'http://localhost:8005/TradePal/Event/getEventsByLieu?location=' + location;

    return this.http.get(url);
  }

  getAllEventDates() {
    return this.http.get<string[]>('http://localhost:8005/TradePal/Event/getAllEventDates');
  }
  getLocationsOfEvents(){
    const url = 'http://localhost:8005/TradePal/Event/getLocationsOfEvents';

    return this.http.get(url);
  }
  getEventsByDate(date: string) {
    const url = 'http://localhost:8005/TradePal/Event/getEventsByDate?date=' + date;

    return this.http.get(url);
  }
  getEventsByUser(user: string) {
    const url = 'http://localhost:8005/TradePal/Event/getEventsByAddedByUsername?addedByUsername=' + user;

    return this.http.get(url);
  }
  getAllEventADD() {
    return this.http.get<string[]>('http://localhost:8005/TradePal/Event/getAddedByUsers');
  }


      getEventsByCat(cat: string) {
  const url = ' http://localhost:8005/TradePal/Event/getEventsByCategory?category=' + cat;

  return this.http.get(url);
}
  getAllCateg() {
    const url = 'http://localhost:8005/TradePal/Event/getEventCategories2';

    return this.http.get(url);
  }

  getAllNEv() {
    const url = 'http://localhost:8005/TradePal/Event/getEventNames2';

    return this.http.get(url);
  }

  getEventsByCategoryAndLocation3(location: string, category: string) {
    const url = `http://localhost:8005/TradePal/Event/getEventsByCategoryAndLocation3?location=${location}&category=${category}`;
    return this.http.get(url);
  }



  getParticipationsBYEventName(eventName: string) {
    const url = `http://localhost:8005/TradePal/Event/getParticipationsBYEventName?eventName=${eventName}`;
    return this.http.get(url);
  }

}
