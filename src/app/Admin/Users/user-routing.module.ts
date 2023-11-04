import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ListOfUserComponent } from './list-of-users/list-of-uses.component';

const routes: Routes=[
  {path:"", component:ListOfUserComponent},
]

@NgModule({
  imports: [CommonModule,
      RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class UserRoutingModule { }
