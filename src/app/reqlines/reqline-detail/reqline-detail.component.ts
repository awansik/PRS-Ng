import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SystemService } from '../../system/system.service';
import { ReqlineService } from '../reqline.service';
import { Reqline } from '../reqline.class';

@Component({
  selector: 'app-reqline-detail',
  templateUrl: './reqline-detail.component.html',
  styleUrls: ['./reqline-detail.component.css']
})
export class ReqlineDetailComponent implements OnInit {

  reqline: Reqline;

  delete(): void {
    this.reqlinesvc.remove(this.reqline)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/requests/lines/'+this.reqline.requestId);
      });
  }

  constructor(
    private sys: SystemService,
    private reqlinesvc: ReqlineService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.reqlinesvc.get(id)
      .subscribe(resp => {
        console.log("resp: ", resp);
        this.reqline = resp.data;
      });
  }

}