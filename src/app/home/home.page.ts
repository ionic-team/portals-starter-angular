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
      <div className="container">
        <img className="logo" src="/assets/logo.svg" />
        <h3>Welcome to Portals</h3>
        <p>
          This is a web application that has the Portals plugin preinstalled. If
          you would like to learn more about how to interact with this web
          application from the Native application you can find reference
          material below.
        </p>
        <ol className="info-list">
          <li>
            <p>Passing Data to a Portal with Initial Context</p>
            <a
              href="https://ionic.io/docs/portals/for-ios/how-to/using-the-portals-plugin#initial-context"
            >
              iOS
            </a>
            <a
              href="https://ionic.io/docs/portals/for-android/how-to/using-the-portals-plugin#initial-context"
            >
              Android
            </a>
          </li>
          <li>
            <p>Communicating with Pub/Sub</p>
            <a
              href="https://ionic.io/docs/portals/for-ios/how-to/using-the-portals-plugin#communicating-via-pubsub"
            >
              iOS
            </a>
            <a
              href="https://ionic.io/docs/portals/for-android/how-to/using-the-portals-plugin#communicating-via-pubsub"
            >
              Android
            </a>
          </li>
          <li>
            <p>Define your own API for communication</p>
            <a
              href="https://ionic.io/docs/portals/for-ios/how-to/define-api-in-typescript"
            >
              iOS
            </a>
            <a
              href="https://ionic.io/docs/portals/for-android/how-to/define-api-in-typescript"
            >
              Android
            </a>
          </li>
        </ol>
        <h3>Initial Context</h3>
        <p>
          This application was preseeded with an Initial Context. This data was
          initially provided by the Native application
        </p>
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
