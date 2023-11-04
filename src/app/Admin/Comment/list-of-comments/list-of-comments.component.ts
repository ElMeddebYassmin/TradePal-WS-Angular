import {Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit} from '@angular/core';
import {formatDate} from "@angular/common";
import {Router} from "@angular/router";
import {FormBuilder, FormControl } from '@angular/forms';
import {map, startWith} from "rxjs/operators";
import {combineLatest, filter, Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {PageEvent} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import { Comment } from 'app/models/Comment';
import { CommentService } from 'app/Services/CommentService/comment.service';
@Component({
  selector: 'app-list-of-comments',
  templateUrl: './list-of-comments.component.html',
  styleUrls: ['./list-of-comments.component.scss']
})


export class ListOfCommentsComponent implements OnInit {

  @NgModule({
    declarations: [ListOfCommentsComponent],
    exports: [ListOfCommentsComponent],
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

  comments: Comment[]=[];
 
  nbrp: number = 1;
  totalElements: any;
  pageIndex: any;
  pageSize: any;
  currentUser:any;


  constructor(private router: Router,private serviceC: CommentService,) { }

  ngOnInit(): void {
    this.ListOfComments()
   
  }


  /*****************************Liste Des Commentaires********************************/
   
  loadAllComments() {
    this.serviceC.getAllComments().subscribe((data) => {
      this.comments = data;
      this.comments.sort((a, b) => a.id - b.id);
      this.totalElements = data['totalElements'];
      this.pageIndex = data['number'];
      this.pageSize = data['size'];
    }, (error) => {
      console.log(error);
      this.router.navigate(['/errorPage']);
    });
  }

    ListOfComments() {
      if (this.filterText == '') {
        this.loadAllComments();
       
      } else {
        this.serviceC.getCommentsByAuthor(this.filterText).subscribe((data) => {
          this.comments = data;
          this.comments.sort((a, b) => a.id - b.id);
          this.totalElements = data['totalElements'];
          this.pageIndex = data['number'];
          this.pageSize = data['size'];
        }, (error) => {
          console.log(error);
          this.router.navigate(['/errorPage']);
        });
      }
    }

    filterComments() {
      this.ListOfComments();
    }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.ListOfComments();
  }

}
