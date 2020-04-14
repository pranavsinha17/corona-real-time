import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateWiseStatServiceService {
 url:String="https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history";
  constructor(private http:HttpClient) { }
  getStateWiseData()
  {
   return this.http.get(`${this.url}`);
  }
}
