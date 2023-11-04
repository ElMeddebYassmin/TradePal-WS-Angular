import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListOfObjectsComponent} from "./list-of-objects/list-of-objects.component";

const routes: Routes=[
  {path:"", component:ListOfObjectsComponent},
]

@NgModule({
  imports: [CommonModule,
      RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class ObjectRoutingModule { }
