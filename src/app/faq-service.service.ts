import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqServiceService {
  url:String="https://api.rootnet.in/covid19-in/contacts";
  constructor(private http:HttpClient) { }
  getContact()
  {
    return this.http.get(`${this.url}`);
  }

}
