import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListOfResponsesComponent} from './list-of-responses/list-of-responses.component';

const routes: Routes=[
    {path:"", component:ListOfResponsesComponent},
]

@NgModule({
    imports: [CommonModule,
        RouterModule.forChild(routes)],
    exports: [RouterModule],

})
export class ResponseRoutingModule {

}
