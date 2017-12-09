import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class OrdersService {
  
  constructor(private http: Http) {}

  sendNotification(message){  
         const body = JSON.stringify(message); 
         console.log("message======"+ body)                   
         const headers = new Headers();
         headers.append('Authorization', 'Basic NDRhYTJhM2UtZDRmYi00N2ZhLTlhODItYzhmMWJlYmMyNjMx');
         headers.append('Content-Type', 'application/json; charset=utf-8');
         return this.http.post('https://onesignal.com/api/v1/notifications', body, {
        headers: headers
    })
    .map((data: Response) => data.json())
     .catch(this.handleError);
  }








  private handleError (error: any) {
   return Observable.throw(error.json());
  }
}
