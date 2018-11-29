import { Component, OnInit } from '@angular/core';

import { SystemService } from '../../system/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {

  userid: number;
  requests: Request[];

  constructor(
    private sys: SystemService,
    private requestsvc: RequestService
  ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    let userid = (this.sys.isLoggedIn) ? this.sys.user.id : 0;
    this.requestsvc.reviews(userid)
      .subscribe(resp => {
        console.log("Requests:", resp);
        this.requests = resp.data;
      });
    
  }

}