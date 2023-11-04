import {Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit} from '@angular/core';
import {formatDate} from "@angular/common";

import {Router} from "@angular/router";
import {FormBuilder, FormControl } from '@angular/forms';
import {PageEvent} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import { Event } from 'app/models/Event';
import { EventService } from 'app/Services/ServicesEvent/event.service';
import {Participation} from '../../../models/Participation';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-list-of-equipes',
  templateUrl: './list-of-events.component.html',
  styleUrls: ['./list-of-events.component.scss']
})


export class ListOfEventsComponent implements OnInit {

  @NgModule({
    declarations: [ListOfEventsComponent],
    exports: [ListOfEventsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })

  filterText: string='';

  showUpdate=false;
  clickedAdd : boolean = false;
  equipeBinding: any;

  searchText:string='';
  result: boolean;

  currentDate = new Date();
  cValue = formatDate(this.currentDate, 'dd-MM-yyyy', 'en-US');

  equipes: Event[]=[];
  participations: Participation[]=[];

  nbrp: number = 1;
  totalElements: any;
  pageIndex: any;
  pageSize: any;
  currentUser:any;
  locationFilter: string = '';
    nameFilter: string = '';
  dateFilter: string = '';
  locations: string[] = []; // Variable pour stocker les lieux
  eventDates: string[] = [];
  selectedDate: string = '';
  adds:string[] = [];
    userFilter: string = '';
catFilter:string='';
    cats:string[] = [];
    evtName:string[] = [];
    nEFilter: string = '';
    selectedCategory: string = "";
    selectedLocation: string = "";
  constructor(private router: Router, private serviceC: EventService, private formBuilder: FormBuilder,
              private dialog: MatDialog,private _routerUp: Router ) { }


  ngOnInit(): void {
    this.serviceC.getEquipes().subscribe(
        (data: Event[]) => {
          console.log("hiiiii")
        
          console.log(data); // Accédez aux données directement, sans .events
            this.equipes = data['events'];  // Affectez les données directement à this.equipes
            this.equipes.sort((a, b) => a.id - b.id);
        },
        (error) => {
          console.log('Erreur :', error);
        }
    );



    this.serviceC.getLocationsOfEvents().subscribe(
        (data: string[]) => {
          this.locations = data['locations'];
         
        },
        (error) => {
          console.log('Erreur lors de la récupération des lieux :', error);
        }
    );


    this.serviceC.getAllEventDates().subscribe(
        (data: string[]) => {
          this.eventDates = data['eventDates'];
        },
        (error) => {
          console.log('Erreur lors de la récupération des date :', error);
        }
    );
      this.serviceC.getAllNEv().subscribe(
          (data: string[]) => {
              this.evtName = data['eventNames'];
          },
          (error) => {
              console.log('Erreur lors de la récupération des noms :', error);
          }
      );
      this.serviceC.getAllEventADD().subscribe(
          (data: string[]) => {
              this.adds = data['addedByUsers'];
          },
          (error) => {
              console.log('Erreur lors de la récupération des date :', error);
          }
      );

      this.serviceC.getParticipations().subscribe(
          (data: Participation[]) => {
              this.participations = data;
          },
          (error) => {
              console.log('Erreur lors de la récupération des date :', error);
          }
      );

      this.serviceC.getAllCateg().subscribe(
          (data: string[]) => {
              this.cats = data;
          },
          (error) => {
              console.log('Erreur lors de la récupération des categorie :', error);
          }
      );

  }



    refreshPage() {
        window.location.reload();
    }
    applyFilter2() {
        this.serviceC.getEventsByCategoryAndLocation3(this.selectedLocation, this.selectedCategory).subscribe(
            (data: Event[]) => {
                this.equipes = data['events'];
            },
            (error) => {
                console.log('Erreur :', error);
            }
        );
    }




    applyFilter() {
    this.serviceC.getEventsByLocation(this.locationFilter).subscribe(
        (data: Event[]) => {
          this.equipes = data['events'];
        },
        (error) => {
          console.log('Erreur :', error);
        }
    );
  }

  applyFilterDate() {
    this.serviceC.getEventsByDate(this.dateFilter).subscribe(
        (data: Event[]) => {
          this.equipes = data['events'];
        },
        (error) => {
          console.log('Erreur :', error);
        }
    );
  }

    applyFilterUser() {
        this.serviceC.getEventsByUser(this.userFilter).subscribe(
            (data: Event[]) => {
                this.equipes = data['events'];
            },
            (error) => {
                console.log('Erreur :', error);
            }
        );
    }
    applyFilterCat() {
        this.serviceC.getEventsByCat(this.catFilter).subscribe(
            (data: Event[]) => {
                this.equipes = data['events'];
            },
            (error) => {
                console.log('Erreur :', error);
            }
        );
    }

    getParticipationsBYEventName() {
        this.serviceC.getParticipationsBYEventName(this.nEFilter).subscribe(
            (data: Participation[]) => {
                this.participations = data;
            },
            (error) => {
                console.log('Erreur :', error);
            }
        );
    }

  /*****************************Liste Des Contrats********************************/
  // ListOfContrats(request){
  //   this.serviceC.getEquipes().subscribe(
  //       (data) => {
  //         this.equipes = data.events;
  //         this.totalElements = data['totalElements'];
  //         this.pageIndex = data['number'];
  //         this.pageSize = data['size'];
  //         console.log("////////////////////111////////////");
  //         console.log(data);
  //       },
  //       (error) => {
  //         console.log('Error:', error);
  //         this.router.navigate(['/errorPage']);
  //       }
  //   );
  //
  //
  //  }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
  //  this.ListOfContrats(request);
  }

}
