import { Component, OnInit } from "@angular/core";

declare const $: any;
const roleToFind = 'admin-role';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "dashboard", class: "" },

  { path: "/User", title: "Users", icon: "person", class: "" },

  { path: "/Object", title: "Objects", icon: "swap_horizontal_circle", class: "" },
  { path: "/Request", title: "Requests", icon: "playlist_add", class: "" },

  { path: "/Organization", title: "Organizations", icon: "group", class: "" },
  { path: "/Donation", title: "Donations", icon: "favorite", class: "" },

  { path: "/Event", title: "Events", icon: "event", class: "" },

  { path: "/Claim", title: "Claims", icon: "warning", class: "" },
  { path: "/Response", title: "Responses", icon: "reply", class: "" },

  { path: "/Blog", title: "Blogs", icon: "article", class: "" },
  { path: "/Comment", title: "Comment", icon: "comment", class: "" },

  
    

  // {
  //   path: "/table-list",
  //   title: "Table List",
  //   icon: "content_paste",
  //   class: "",
  // },
  // { path: "/Forum/all", title: "Forum", icon: "groups", class: "" },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  email: any;
  username: any;
  usernameObject: any;
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);


  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  user = '';



  
}
