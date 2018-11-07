import { Component, OnInit } from '@angular/core';

import { Menu } from '../menu.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name: string;

  menus: Menu[] = [
    new Menu("Home", "/home", "The Home Page"),
    new Menu("Users", "/users/list", "The User List"),
    new Menu("Vendors", "/vendors/list", "The Vendor List"),
    new Menu("Products", "/products/list", "The Products Page"),
    new Menu("Requests", "/requests/list", "The Purchase Request List"),
    new Menu("Review", '/requests/review-list', 'The Review Page'),
    new Menu("About", "/about", "The About Page"),
    new Menu("Login", "/users/login", "Login Page")
  ];

  constructor(
    private sys: SystemService
  ) { }

  ngOnInit() {
    this.name = (this.sys.user != null) ? this.sys.user.lastName : 'Not logged in';
  }

}
