import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-single-sign-on',
  templateUrl: './single-sign-on.component.html',
  styleUrls: ['./single-sign-on.component.scss']
})
export class SingleSignOnComponent {

  readonly YOUR_IMAGE_URL: string = '/assets/images/keyhole.svg';
  @Output() public isActiveChange!: EventEmitter<boolean>;

  constructor() {
  }

  public onRouterLinkActive( event: boolean, type: 'login' | 'manage' | 'register' | 'reset' | 'update' ): void {
    console.log( event, type );
  }

}
