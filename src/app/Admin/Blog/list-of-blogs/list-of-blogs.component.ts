import {Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit} from '@angular/core';
import {formatDate} from "@angular/common";
import {Blog} from "../../../models/Blog";
import {BlogService} from "../../../Services/BlogService/blog.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl } from '@angular/forms';
import {PageEvent} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-list-of-blogs',
  templateUrl: './list-of-blogs.component.html',
  styleUrls: ['./list-of-blogs.component.scss']
})


export class ListOfBlogsComponent implements OnInit {

  @NgModule({
    declarations: [ListOfBlogsComponent],
    exports: [ListOfBlogsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })

  selectedFilter: string = "All"; 

  filterText: string='';

  showUpdate=false;
  clickedAdd : boolean = false;
  blogBinding: any;
  currentUser:any;
  searchText:string='';
  result: boolean;

  currentDate = new Date();
  cValue = formatDate(this.currentDate, 'dd-MM-yyyy', 'en-US');

  blogs: any;
  CNA: Blog[]=[];
  CA: Blog[]=[];
  nbrp: number = 1;
  totalElements: any;
  pageIndex: any;
  pageSize: any;
  titles: any;
  searchusername:string='';

  constructor(private router: Router,private serviceC: BlogService, private formBuilder: FormBuilder,
              private dialog: MatDialog) { }


  ngOnInit(): void {
    this.loadAllBlogs()
  }
  
  $event: any;

  /*****************************Liste Des Blogs********************************/
  loadAllBlogs() {
    this.serviceC.getAllBlogs().subscribe((data) => {
      this.blogs = data;
      this.blogs.sort((a, b) => a.id - b.id);
      this.totalElements = data['totalElements'];
      this.pageIndex = data['number'];
      this.pageSize = data['size'];
    }, (error) => {
      console.log(error);
      this.router.navigate(['/errorPage']);
    });
  }

  filterBlogs() {
    if (this.selectedFilter === 'All' && this.filterText=='') {
      this.loadAllBlogs();
    } 
    else if(this.selectedFilter==='All' && this.filterText !==''){
      this.serviceC.getBlogsByA(this.filterText).subscribe((data) => {
        this.blogs = data;
        this.blogs.sort((a, b) => a.id - b.id);
        this.totalElements = data['totalElements'];
        this.pageIndex = data['number'];
        this.pageSize = data['size'];
      }, (error) => {
        console.log(error);
        this.router.navigate(['/errorPage']);
      });
    }    
    else if(this.selectedFilter!=='All' && this.filterText==''){
      this.serviceC.getBlogsByCategory(this.selectedFilter).subscribe((data) => {
        this.blogs = data;
        this.blogs.sort((a, b) => a.id - b.id);
        this.totalElements = data['totalElements'];
        this.pageIndex = data['number'];
        this.pageSize = data['size'];
      }, (error) => {
        console.log(error);
        this.router.navigate(['/errorPage']);
      });
    }
    else if(this.selectedFilter!=='All' && this.filterText!==''){
      this.serviceC.getBlogsByCategoryAndAuthor(this.filterText, this.selectedFilter).subscribe((data) => {
        console.log("tay")
        this.blogs = data;
        this.blogs.sort((a, b) => a.id - b.id);
        this.totalElements = data['totalElements'];
        this.pageIndex = data['number'];
        this.pageSize = data['size'];
      }, (error) => {
        console.log(error);
        this.router.navigate(['/errorPage']);
      });
    }
    else {
      this.loadAllBlogs();
    }
  }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.filterBlogs();
  }
  
  getStatusBadgeClass(status: string): any {
    let badgeClass: string;

    switch (status) {
      case 'Publique':
        badgeClass = 'badge badge-success'; 
        break;
     
      case 'Privé':
        badgeClass = 'badge badge-warning'; 
        break;
    
    }
 
    return badgeClass;
  }
}
