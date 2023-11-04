import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Claim} from '../../../models/Claim';
import {formatDate} from '@angular/common';
import {PageEvent} from '@angular/material/paginator';
import {filter} from 'rxjs';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ClaimService} from '../../../Services/ClaimService/claim.service';



@Component({
  selector: 'app-list-of-claims',
  templateUrl: './list-of-claims.component.html',
  styleUrls: ['./list-of-claims.component.scss']
})
export class ListOfClaimsComponent implements OnInit {
  selectedStatus: string;
  searchValue : string='';
  clickedAdd : boolean = false;
  showUpdate=false;
  claims:Claim[]=[];
  totalElements: any;
  pageIndex: any;
  pageSize: any;
  currentDate = new Date();
  cValue = formatDate(this.currentDate, 'dd-MM-yyyy', 'en-US');
  filterText: string='';
  result: boolean;

  constructor(private router: Router, private claimService:ClaimService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ListOfClaims({page:"0", size:"5"});
  }

  getStatusBadgeClass(status: string): any {
    let badgeClass: string;

    switch (status) {
      case 'PENDING':
        badgeClass = 'badge badge-danger';
        break;
      case 'INPROGRESS':
        badgeClass = 'badge badge-warning';
        break;
      case 'RESOLVED':
        badgeClass = 'badge badge-success';
        break;
      default:
        badgeClass = 'badge badge-dark';
        break;
    }

    return badgeClass;
  }


  /*****************************Liste Des Claims********************************/
  ListOfClaims(request){
    this.claimService.getAllClaims().subscribe((data)=>{
      this.claims=data;
      this.totalElements=data['totalElements']
      this.pageIndex = data['number']
      this.pageSize = data['size'];
    },error=>{
      console.log(error)
      this.router.navigate(['/errorPage'])
    });
    }


  /*****************************Liste Des Claims Par Status********************************/
  listClaimsByStatus(){
    this.claimService.getClaimByStatus(this.selectedStatus).subscribe((data)=>{
      this.claims=data;
      this.totalElements=data['totalElements']
      this.pageIndex = data['number']
      this.pageSize = data['size'];
    },error=>{
      console.log(error)
      this.router.navigate(['/errorPage'])
    });
  }


  /*****************************Liste Des Claims Par Subject********************************/
  listClaimsBySubject(){
    console.log("heloooooooooo",this.searchValue)
    this.claimService.getClaimBySubject(this.searchValue).subscribe((data)=>{
      this.claims=data;
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
    this.ListOfClaims(request);
  }

  clearFilters() {
    this.ListOfClaims({page:"0", size:"5"})
  }

   readonly filter = filter;


}

