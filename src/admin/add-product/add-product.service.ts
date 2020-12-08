import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {product} from './product';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {


  _url = "http://localhost:3000/product";
  constructor(private _http: HttpClient) { }

  create(userData){
    return this._http.post<product>(this._url,userData);
  }
}
