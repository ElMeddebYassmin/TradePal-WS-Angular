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
import { Object } from 'app/models/Object';
import { ObjectService } from 'app/Services/ObjectService/objectservice.service';
import { UserService } from 'app/Services/UserService/user.service';
import { User } from 'app/models/User';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})


export class ListOfUserComponent implements OnInit {

  @NgModule({
    declarations: [ListOfUserComponent],
    exports: [ListOfUserComponent],
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

  users: User[]=[];
 
  nbrp: number = 1;
  totalElements: any;
  pageIndex: any;
  pageSize: any;
  currentUser:any;


  constructor(private router: Router,private serviceC: UserService,) { }

  ngOnInit(): void {
    this.ListOfUsers()
   
  }


  /*****************************Liste Des Contrats********************************/
  ListOfUsers(){
    this.serviceC.getAllUsers().subscribe((data)=>{
      this.users=data;
      this.totalElements=data['totalElements']
      this.pageIndex = data['number']
      this.pageSize = data['size'];
     
    },error=>{
      console.log(error)
      this.router.navigate(['/errorPage'])
    });}
   


  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.ListOfUsers();
  }

}
