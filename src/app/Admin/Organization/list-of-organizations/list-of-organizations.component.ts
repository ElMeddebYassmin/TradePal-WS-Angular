import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit } from '@angular/core';
import { formatDate } from "@angular/common";
import { Router } from "@angular/router";
import { FormBuilder, FormControl } from '@angular/forms';
import { map, startWith } from "rxjs/operators";
import { combineLatest, filter, Observable } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";
import { PageEvent } from "@angular/material/paginator";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { Organization } from 'app/models/Organization';
import { OrganizationserviceService } from 'app/Services/ServicesOrganization/organizationservice.service';

@Component({
  selector: 'app-list-of-organizations',
  templateUrl: './list-of-organizations.component.html',
  styleUrls: ['./list-of-organizations.component.scss']
})

export class ListOfOrganizationsComponent implements OnInit {
  filterText: string = '';
  showUpdate = false;
  clickedAdd: boolean = false;
  organizationBinding: any;
  currentUser: any;
  searchText: string = '';
  result: boolean;
  currentDate = new Date();
  cValue = formatDate(this.currentDate, 'dd-MM-yyyy', 'en-US');
  organizations: Organization[] = [];
  nbrp: number = 1;
  totalElements: any;
  pageIndex: any;
  pageSize: any;
  selectedFilter: string = "All"; 

  constructor(
    private router: Router,
    private serviceC: OrganizationserviceService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.ListOfOrganizations();
  }

  loadAllOrganizations() {
    this.serviceC.getOrganizations().subscribe((data) => {
      this.organizations = data;
      this.organizations.sort((a, b) => a.id - b.id);
      this.totalElements = data['totalElements'];
      this.pageIndex = data['number'];
      this.pageSize = data['size'];
    }, (error) => {
      console.log(error);
      this.router.navigate(['/errorPage']);
    });
  }
  
  ListOfOrganizations() {
    if (this.selectedFilter === 'All') {
      this.loadAllOrganizations();
     
    } else {
      this.serviceC.getOrganizationsByCategory(this.selectedFilter).subscribe((data) => {
        this.organizations = data;
        this.organizations.sort((a, b) => a.id - b.id);
        this.totalElements = data['totalElements'];
        this.pageIndex = data['number'];
        this.pageSize = data['size'];
      }, (error) => {
        console.log(error);
        this.router.navigate(['/errorPage']);
      });
    }
  }
  
  filterOrganizations() {
    this.ListOfOrganizations();
  }
  getStatusBadgeClass(status: string): any {
    let badgeClass: string;

    switch (status) {
      case 'false':
        badgeClass = 'badge badge-success'; 
        break;
     
      case 'true':
        badgeClass = 'badge badge-danger'; 
        break;
    
    }
 
    return badgeClass;
  }
}
