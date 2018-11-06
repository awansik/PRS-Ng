import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SystemService } from '../system/system.service';
import { Reqline } from './reqline.class';
import { JsonResponse } from '../util/json-response.class';

const url = 'http://localhost:8080/RequestLines/';

@Injectable({
  providedIn: 'root'
})
export class ReqlineService {

  list(): Observable<JsonResponse> {
    return this.http.get(url + "List") as Observable<JsonResponse>;
  }
  get(id): Observable<JsonResponse> {
    return this.http.get(url + "Get/" + id) as Observable<JsonResponse>;
  }
  add(reqline: Reqline): Observable<JsonResponse> {
    return this.http.post(url + "Add", reqline) as Observable<JsonResponse>;
  }
  change(reqline: Reqline): Observable<JsonResponse> {
    return this.http.post(url + "Change", reqline) as Observable<JsonResponse>;
  }
  remove(reqline: Reqline): Observable<JsonResponse> {
    return this.http.post(url + "Remove", reqline) as Observable<JsonResponse>;
  }

  constructor(    
    private sys: SystemService,
    private http: HttpClient
  ) { }
}