import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListOfClaimsComponent} from './list-of-claims/list-of-claims.component';

const routes: Routes=[
    {path:"", component:ListOfClaimsComponent},
]

@NgModule({
    imports: [CommonModule,
        RouterModule.forChild(routes)],
    exports: [RouterModule],

})
export class ClaimRoutingModule {

}
