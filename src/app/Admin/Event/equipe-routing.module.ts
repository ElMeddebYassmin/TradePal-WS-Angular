import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ListOfEventsComponent } from './list-of-equipes/list-of-events.component';

const routes: Routes=[
  {path:"", component:ListOfEventsComponent},
]

@NgModule({
  imports: [CommonModule,
      RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class EquipeRoutingModule { }
