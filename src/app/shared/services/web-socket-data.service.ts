import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

/**
 *
 */
@Injectable({
  providedIn: 'root'
})
export class WebSocketDataService {

  /**
   *
   */
  private webSocketDataSource: BehaviorSubject<string>;
  /**
   *
   */
  public currentWebSocketData: Observable<string>;

  /**
   *
   */
  constructor() {
    this.webSocketDataSource = new BehaviorSubject(JSON.stringify({}));
    this.currentWebSocketData = this.webSocketDataSource.asObservable();
  }

  /**
   *
   * @param eventName
   * @param data
   */
  public updateWebSocketData(eventName: string, data: any) {
    this.webSocketDataSource.next(JSON.stringify({eventName, data}));
  }

}
