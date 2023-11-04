import {Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit, ViewChild} from '@angular/core';
import {formatDate} from "@angular/common";
import {Router} from "@angular/router";
import {FormBuilder, FormControl } from '@angular/forms';
import {map, startWith} from "rxjs/operators";
import {combineLatest, filter, Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {PageEvent} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import { Donation } from 'app/models/Donation';
import { DonationService } from 'app/Services/DonationService/donation.service';
@Component({
  selector: 'app-list-of-donations',
  templateUrl: './list-of-donations.component.html',
  styleUrls: ['./list-of-donations.component.scss']
})


export class ListOfDonationsComponent implements OnInit {

  @NgModule({
    declarations: [ListOfDonationsComponent],
    exports: [ListOfDonationsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })

  filterText: string='';


  showUpdate=false;
  clickedAdd : boolean = false;
  objectBinding: any;

  searchText:string='';
  result: boolean;

  currentDate = new Date();

  donations: Donation[]=[];
 
  nbrp: number = 1;
  totalElements: any;
  pageIndex: any;
  pageSize: any;
  currentUser:any;

  selectedDonationCategory: string = "none";
  selectedOrgCategory: string = "none";

  constructor(private router: Router, private serviceD: DonationService) {}

  ngOnInit(): void {
    this.loadAllDonations();
  }

  filterDonations() {
    if (this.selectedDonationCategory !== "none" && this.selectedOrgCategory !== "none") {
      this.serviceD.getDonationsByOrganizationCategory(
        this.selectedDonationCategory,
        this.selectedOrgCategory
      ).subscribe((data) => {
        this.donations = data;
        this.donations.sort((a, b) => a.id - b.id);
        this.totalElements = data['totalElements'];
        this.pageIndex = data['number'];
        this.pageSize = data['size'];
      }, error => {
        console.log(error);
        this.router.navigate(['/errorPage']);
      });
    } else if (this.selectedDonationCategory !== "none" && this.selectedOrgCategory == "none" ) {
      this.serviceD.getDonationsByCategory(this.selectedDonationCategory).subscribe((data) => {
        this.donations = data;
        this.donations.sort((a, b) => a.id - b.id);
        this.totalElements = data['totalElements'];
        this.pageIndex = data['number'];
        this.pageSize = data['size'];
      }, error => {
        console.log(error);
        this.router.navigate(['/errorPage']);
      });
    } else {
      this.loadAllDonations();
    }
  }

  loadAllDonations() {
    this.serviceD.getDonations().subscribe((data) => {
      this.donations = data;
      this.donations.sort((a, b) => a.id - b.id);
      this.totalElements = data['totalElements'];
      this.pageIndex = data['number'];
      this.pageSize = data['size'];
    }, error => {
      console.log(error);
      this.router.navigate(['/errorPage']);
    });
  }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.filterDonations();
  }
}
