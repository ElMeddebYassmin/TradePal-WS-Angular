import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListOfBlogsComponent} from "./list-of-blogs/list-of-blogs.component";

const routes: Routes=[
  {path:"", component:ListOfBlogsComponent},
]

@NgModule({
  imports: [CommonModule,
      RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class BlogRoutingModule { }
