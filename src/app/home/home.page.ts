import { Component, OnInit } from "@angular/core";
import { getInitialContext } from "@ionic/portals";

@Component({
  selector: "app-home",
  styleUrls: ["home.page.scss"],
  template: ` <ion-header
      [translucent]="true"
      [hidden]="!initialContext.showHeader"
    >
      <ion-toolbar>
        <ion-title> Blank </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense" [hidden]="!initialContext.showHeader">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <pre>{{ initialContext | json }}</pre>
      </div>
    </ion-content>`,
})
export class HomePage implements OnInit {
  initialContext: any | null = null;

  ngOnInit() {
    this.initialContext = {
      showHeader: false,
      ...getInitialContext(),
    };
  }

  constructor() {}
}
