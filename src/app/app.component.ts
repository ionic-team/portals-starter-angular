import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { INIITAL_CONTEXT } from "./tokens";
import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { INIITAL_CONTEXT } from "./tokens";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    @Inject(INIITAL_CONTEXT) private readonly initialContext: any,
    private readonly router: Router
  ) {}
  ngOnInit() {
    if (this.initialContext.startingRoute !== "/") {
      this.router.navigate([this.initialContext.startingRoute]);
    }
  }
}
