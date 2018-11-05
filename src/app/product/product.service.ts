import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from './product.class';
import { JsonResponse } from '../util/json-response.class';

const url = 'http://localhost:8080/Products/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list(): Observable<JsonResponse> {
    return this.http.get(url + "List") as Observable<JsonResponse>;
  }
  get(id): Observable<JsonResponse> {
    return this.http.get(url + "get/" + id) as Observable<JsonResponse>;
  }
  add(product: Product): Observable<JsonResponse> {
    return this.http.post(url + "add", product) as Observable<JsonResponse>;
  }
  change(product: Product): Observable<JsonResponse> {
    return this.http.post(url + "change", product) as Observable<JsonResponse>;
  }
  remove(product: Product): Observable<JsonResponse> {
    return this.http.post(url + "remove", product) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}