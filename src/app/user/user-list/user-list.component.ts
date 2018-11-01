import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user.class';
 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private usersvc: UserService) { }

  ngOnInit() {
    this.usersvc.list()
      .subscribe(resp => {
        console.log("Users:", resp);
        this.users = resp.data;
      });
  }

}
