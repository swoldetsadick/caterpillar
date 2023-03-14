import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Subscription} from 'rxjs';
/* Local Modules */
import {WebSocketService} from './shared/services/web-socket.service';
import {WebSocketDataService} from './shared/services/web-socket-data.service';

/**
 *
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  /**
   *
   */
  public title: string;
  /**
   *
   */
  private webSocketSubscription!: Subscription;

  /**
   *
   * @param titleService
   * @param webSocketService
   * @param webSocketDataService
   */
  constructor(
    private titleService: Title,
    private webSocketService: WebSocketService,
    private webSocketDataService: WebSocketDataService
  ) {
    this.title = 'caterpillar';
    this.titleService.setTitle( this.title );
  }

  /**
   *
   */
  ngOnInit(): void {
    this.webSocketSubscription = this.webSocketService.listen('someEvent').subscribe((data) => {
      this.webSocketDataService.updateWebSocketData('someEvent', data);
    });
    this.webSocketService.disconnect(); // todo Remove
  }

  /**
   *
   */
  ngOnDestroy(): void {
    if (this.webSocketSubscription) {
      this.webSocketService.disconnect();
      this.webSocketSubscription.unsubscribe();
    }
  }

}
