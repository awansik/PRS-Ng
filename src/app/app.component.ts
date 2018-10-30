import { Component } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prsng';

  constructor(user: UserService) {
    user.list().subscribe(resp => { console.log(resp); });
  }

}
