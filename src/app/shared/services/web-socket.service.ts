import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {io, Socket} from 'socket.io-client';
/* Local Modules */
import {environment} from 'src/environments/environment';

/**
 *
 */
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  /**
   *
   */
  private socket: Socket;
  /**
   *
   */
  readonly uri: string;

  /**
   *
   */
  constructor() {
    this.uri = environment.webSocketURL;
    this.socket = io(this.uri);
  }

  /**
   *
   */
  public disconnect(): void {
    this.socket.disconnect();
  }

  /**
   *
   * @param eventName
   * @param data
   */
  public emit(eventName: string, data: any): void {
    this.socket.on(eventName, data);
  }

  /**
   *
   * @param eventName
   */
  public listen(eventName: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      });
    });
  }

}
