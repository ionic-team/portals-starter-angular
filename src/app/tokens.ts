import { getInitialContext } from "@ionic/portals";
import { InjectionToken } from "@angular/core";

const initialContext = {
  showToolbar: false,
  startingRoute: "/",
  ...getInitialContext<any>(),
};

export const INIITAL_CONTEXT = new InjectionToken<any>("initialContextToken", {
  providedIn: "root",
  factory: () => initialContext,
});
