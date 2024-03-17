import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  getdata(){
    return this._http.get('https://api.apispreadsheets.com/data/hP19fTj0gdhupMYh/');
  }
}
