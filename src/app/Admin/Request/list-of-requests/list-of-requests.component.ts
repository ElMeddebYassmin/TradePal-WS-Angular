import { Request } from './../../../models/Request';
import {Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit} from '@angular/core';
import {formatDate} from "@angular/common";
import {Router} from "@angular/router";
import {FormBuilder, FormControl } from '@angular/forms';
import {map, startWith} from "rxjs/operators";
import {combineLatest, filter, Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {PageEvent} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { RequestService } from 'app/Services/RequestService/request.service';
import { ObjectService } from 'app/Services/ObjectService/objectservice.service';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-list-of-requests',
  templateUrl: './list-of-requests.component.html',
  styleUrls: ['./list-of-requests.component.scss']
})


export class ListOfRequestsComponent implements OnInit {

  @NgModule({
    declarations: [ListOfRequestsComponent],
    exports: [ListOfRequestsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })

  filterText: string='';


  showUpdate=false;
  clickedAdd : boolean = false;
 objectBinding: any;

  searchText:string='';
  result: boolean;

  currentDate = new Date();
  cValue = formatDate(this.currentDate, 'dd-MM-yyyy', 'en-US');

  requests: Request[]=[];
 
  nbrp: number = 1;
  totalElements: any;
  pageIndex: any;
  pageSize: any;
  currentUser:any;
  desiredObjects: string[];
  exchangeableObjects: string[];
  selectedDesired: string = 'Select';
  selectedExchangeable: string = 'Select';

  constructor(private router: Router,private serviceC: RequestService, private serviceObject: ObjectService ) { }

  ngOnInit(): void {
    this.ListOfRequests()
    this.serviceObject.getAllObjects().subscribe((data) => {
      this.desiredObjects = data.map(
        item => item.name);
      this.exchangeableObjects = data.map(item => item.name);
    });
    
  }


  /*****************************Liste Des Contrats********************************/
  ListOfRequests(){
    this.serviceC.getAllRequests().subscribe((data)=>{
      this.requests=data;
      this.requests.sort((a, b) => a.id - b.id);

      this.totalElements=data['totalElements']
      this.pageIndex = data['number']
      this.pageSize = data['size'];
     
    },error=>{
      console.log(error)
      this.router.navigate(['/errorPage'])
    });}
   
    searchRequests() {
      this.serviceC.getRequestsByDesiredAndExchangeable(this.selectedDesired, this.selectedExchangeable).subscribe((data) => {
        this.requests = data;
      });
    }
    refreshPage() {
      this.serviceC.getAllRequests().subscribe((data)=>{
        this.requests=data;
      });}
    

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.ListOfRequests();
  }
  getStatusBadgeClass(status: string): any {
    let badgeClass: string;

    switch (status) {
      case 'ANNULE':
        badgeClass = 'badge badge-danger'; 
        break;
      case 'EN_COURS':
        badgeClass = 'badge badge-warning'; 
        break;
      case 'CONFIRME':
        badgeClass = 'badge badge-success'; 
        break;
    
    }

    return badgeClass;
  }
}
