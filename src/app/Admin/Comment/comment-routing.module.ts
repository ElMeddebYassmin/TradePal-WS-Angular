import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListOfCommentsComponent} from "./list-of-comments/list-of-comments.component";

const routes: Routes=[
  {path:"", component:ListOfCommentsComponent},
]

@NgModule({
  imports: [CommonModule,
      RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class CommentRoutingModule { }
