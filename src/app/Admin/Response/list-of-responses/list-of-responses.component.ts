import { Component, OnInit } from '@angular/core';
import {Claim} from '../../../models/Claim';
import {formatDate} from '@angular/common';
import {Router} from '@angular/router';
import {ClaimService} from '../../../Services/ClaimService/claim.service';
import {MatDialog} from '@angular/material/dialog';
import {PageEvent} from '@angular/material/paginator';
import {filter} from 'rxjs';
import {ResponseService} from '../../../Services/ResponseService/response.service';
import {Response} from '../../../models/Response'
@Component({
  selector: 'app-list-of-responses',
  templateUrl: './list-of-responses.component.html',
  styleUrls: ['./list-of-responses.component.scss']
})
export class ListOfResponsesComponent implements OnInit {

  selectedType: string;
  clickedAdd : boolean = false;
  showUpdate=false;
  contractBinding: any;
  responses:Response[]=[];
  totalElements: any;
  pageIndex: any;
  pageSize: any;
  currentDate = new Date();
  cValue = formatDate(this.currentDate, 'dd-MM-yyyy', 'en-US');
  filterText: string='';
  result: boolean;
  searchValue: any;

  constructor(private router: Router, private responseService:ResponseService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ListOfResponses({page:"0", size:"5"});

  }

  /*****************************Liste Des Responses********************************/
  ListOfResponses(request){
    this.responseService.getAllResponses().subscribe((data)=>{
      this.responses=data;
      this.totalElements=data['totalElements']
      this.pageIndex = data['number']
      this.pageSize = data['size'];
    },error=>{
      console.log(error)
      this.router.navigate(['/errorPage'])
    });
  }


  ListOfResponsesByType(){
    this.responseService.getAllResponsesByType(this.selectedType).subscribe((data)=>{
      this.responses=data;
      this.totalElements=data['totalElements']
      this.pageIndex = data['number']
      this.pageSize = data['size'];
    },error=>{
      console.log(error)
      this.router.navigate(['/errorPage'])
    });
  }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.ListOfResponses(request);
  }


  readonly filter = filter;


  listClaimsBySubject() {

  }


  clearFilters() {
    this.ListOfResponses({page:"0", size:"5"})
  }
}

