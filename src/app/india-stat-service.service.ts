import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { IndiaStat } from './india-stat';

@Injectable({
  providedIn: 'root'
})
export class IndiaStatServiceService {
  url:String="https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise";
  constructor(private http:HttpClient) { 

  }
  getData()
  {
    return this.http.get(`${this.url}`);
  }
}
