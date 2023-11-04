import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListOfDonationsComponent} from "./list-of-donations/list-of-donations.component";

const routes: Routes=[
  {path:"", component:ListOfDonationsComponent},
]

@NgModule({
  imports: [CommonModule,
      RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class DonationRoutingModule { }
