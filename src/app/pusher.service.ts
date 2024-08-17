declare const Pusher: any;

// ...
// .... pusher.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// .....

@Injectable({
  providedIn: 'root',
})
export class PusherService {
  pusher: any;
  channel: any;
  constructor(private http: HttpClient) {
    this.pusher = new Pusher("dcb64cab515acdc43f45", {
      cluster: "mt1",
      encrypted: true,
    });
    this.channel = this.pusher.subscribe('my-channel');
  }

 // like(num_likes:) {
   // his.http
     // .post('http://localhost:3120/update', { likes: num_likes })
      //.subscribe((data) => {});
 // }
}
