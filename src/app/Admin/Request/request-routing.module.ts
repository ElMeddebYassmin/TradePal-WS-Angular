import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListOfRequestsComponent} from "./list-of-requests/list-of-requests.component";

const routes: Routes=[
  {path:"", component:ListOfRequestsComponent},
]

@NgModule({
  imports: [CommonModule,
      RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class requestRoutingModule { }
