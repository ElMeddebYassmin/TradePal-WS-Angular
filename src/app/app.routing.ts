import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

const routes: Routes = [
  {path: "",redirectTo: "welcome", pathMatch: "full",},

  {path: "",component: AdminLayoutComponent,children: [{path: "",loadChildren: () =>
          import("./layouts/admin-layout/admin-layout.module").then((m) => m.AdminLayoutModule)},],
  },
  { path: 'welcome', loadChildren: () => import('./Admin/home/home.module').then(m => m.HomeModule) },
  { path: 'profile', loadChildren: () => import('./Admin/profile/profile.module').then(m => m.ProfileModule) },

  {path: "User",component: AdminLayoutComponent,children: [{path: "",loadChildren: ()=>
  import("./Admin/Users/user.module").then((m) => m.UserModule)},],
},
  {path: "Object",component: AdminLayoutComponent,children: [{path: "",loadChildren: ()=>
          import("./Admin/Object/object.module").then((m) => m.ObjectModule)},],
  },
  {path: "Request",component: AdminLayoutComponent,children: [{path: "",loadChildren: ()=>
  import("./Admin/Request/request.module").then((m) => m.RequestModule)},],
},
  {path: "Blog",component: AdminLayoutComponent,children: [{path: "",loadChildren: ()=>
          import("./Admin/Blog/blog.module").then((m) => m.BlogModule)},],
  },
  {path: "Comment",component: AdminLayoutComponent,children: [{path: "",loadChildren: ()=>
  import("./Admin/Comment/comment.module").then((m) => m.CommentModule)},],
},


  {path: "Claim",component: AdminLayoutComponent,children: [{path: "",loadChildren: ()=>
          import("./Admin/Claim/claim.module").then((m) => m.ClaimModule)},],
  },
  {path: "Response",component: AdminLayoutComponent,children: [{path: "",loadChildren: ()=>
          import("./Admin/Response/Response.module").then((m) => m.ResponseModule)},],
  },


  {path: "Event",component: AdminLayoutComponent,children: [{path: "",loadChildren: ()=>
          import("./Admin/Event/equipe.module").then((m) => m.EquipeModule),},],
  },

  {path: "Organization",component: AdminLayoutComponent,children: [{path: "",loadChildren: ()=>
          import("./Admin/Organization/organization.module").then((m) => m.OrganizationModule)},],
  },

  {path: "Donation",component: AdminLayoutComponent,children: [{path: "",loadChildren: ()=>
          import("./Admin/Donation/donation.module").then((m) => m.DonationModule)},],
  },
];
 
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}


// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// import { AuthGuard } from '../app/utility/app.guard';

// const routes: Routes = [
//   { path: '', redirectTo: 'welcome', pathMatch: 'full' },
//   { path: 'welcome', loadChildren: () => import('./Admin/home/home.module').then(m => m.HomeModule) },
//  { path: 'profile', loadChildren: () => import('./Admin/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
