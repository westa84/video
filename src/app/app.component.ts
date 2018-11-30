import { Component } from '@angular/core';
import { GLOBAL_PUBLISH_EXPANDO_KEY } from '@angular/core/src/render3/global_utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Lista filmów';
  public color = 'pink'

  get styles() {
    return {
      background: this.color
    };
  }

}
