// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as L from "leaflet";

declare module "leaflet" {
  interface Polyline {
    arrowheads(options?: {
      frequency?: string;
      size?: string;
      yawn?: number;
      fill?: boolean;
    }): this;
  }
}
