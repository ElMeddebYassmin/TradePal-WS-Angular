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
import { ItemCategory, Object } from 'app/models/Object';
import { ObjectService } from 'app/Services/ObjectService/objectservice.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-list-of-objects',
  templateUrl: './list-of-objects.component.html',
  styleUrls: ['./list-of-objects.component.scss']
})


export class ListOfObjectsComponent implements OnInit {

  @NgModule({
    declarations: [ListOfObjectsComponent],
    exports: [ListOfObjectsComponent],
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

  objects: Object[]=[];
  categories: ItemCategory[]=[];
  uniqueCategoriesList:ItemCategory[]=[];
  nbrp: number = 1;
  totalElements: any;
  pageIndex: any;
  pageSize: any;
  currentUser:any;
  selectedStatus: string = 'Disponible'; 
  selectedCategory: string = 'Toys_and_games'; 
  categoryName: string[];
  constructor(private router: Router,private serviceC: ObjectService,) { }
  isTableVisible: boolean = false;

  toggleTableVisibility() {
    this.isTableVisible = !this.isTableVisible;
  }
  ngOnInit(): void {
    this.ListOfObjects()
    this.ListOfCategories()
    this.serviceC.getAllCategories().subscribe((data) => {
      this.categoryName = data.map(category => category.name);
      this.categoryName = Array.from(new Set(this.categoryName));
    });
    
  }


  /*****************************Liste Des Contrats********************************/
  ListOfObjects(){
    this.serviceC.getAllObjects().subscribe((data)=>{
      
      this.objects=data;
      this.objects.sort((a, b) => a.id - b.id);
     

      this.totalElements=data['totalElements']
      this.pageIndex = data['number']
      this.pageSize = data['size'];
     
    },error=>{
      console.log(error)
      this.router.navigate(['/errorPage'])
    });}

    ListOfCategories() {
      this.serviceC.getAllCategories().subscribe((data) => {
        this.categories = data;
        this.categories.sort((a, b) => a.id - b.id);
        const uniqueCategories = {};
        this.categories.forEach((category) => {
          if (!uniqueCategories[category.name]) {
            uniqueCategories[category.name] = {
              id: category.id,
              name: category.name,
              items: [category.contains_items]
            };
          } else {
            uniqueCategories[category.name].items.push(category.contains_items);
          }
        });
        
        // Extraire les valeurs de la propriété "values"
        this.uniqueCategoriesList = [];
        for (const key in uniqueCategories) {
          if (uniqueCategories.hasOwnProperty(key)) {
            this.uniqueCategoriesList.push(uniqueCategories[key]);
          }
        }
      }, error => {
        console.log(error);
        // Gérez les erreurs ici
      });
    }
    
   
    searchItemsByCategory() {
      this.serviceC.getItemsByCategory(this.selectedCategory).subscribe((data: any) => {
        this.objects = data;
        this.objects.sort((a, b) => a.id - b.id);
      });
    }

    searchItemsByStatus() {
   
      this.serviceC.getItemsByStatus(this.selectedStatus).subscribe((data: any) => {
        this.objects = data;
        this.objects.sort((a, b) => a.id - b.id);
      });
    }
    refreshPage() {
      this.serviceC.getAllObjects().subscribe((data)=>{
        this.objects=data;
        this.objects.sort((a, b) => a.id - b.id);
      });}
    getStatusBadgeClass(status: string): any {
      let badgeClass: string;
  
      switch (status) {
        case 'Indisponible':
          badgeClass = 'badge badge-danger'; 
          break;
       
        case 'Disponible':
          badgeClass = 'badge badge-success'; 
          break;
      
      }
   
      return badgeClass;
    }
  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.ListOfObjects();
  }

}
