import { Component } from '@angular/core';
import { PusherService } from '../pusher.service';

@Component({
  selector: 'app-pushi',
  templateUrl: './pushi.component.html',
  styleUrls: ['./pushi.component.css'],
})
export class PushiComponent {
  constructor(private pusherService: PusherService) {}
  ngOnInit() {
    this.pusherService.channel.bind('my-event', (data: any) => {
      console.log("xxxx", data);
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
