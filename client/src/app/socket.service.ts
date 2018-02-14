import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SocketService {

  private socket: SocketIOClient.Socket;

  constructor () {
    this.socket = io();
  }

  listenForSmartThingsEvents () {
    const observable = new Observable(observer => {
      this.socket.on('new event', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

}
