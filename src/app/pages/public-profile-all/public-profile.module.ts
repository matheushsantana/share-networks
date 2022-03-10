import { NgModule } from "@angular/core";
import { PublicProfileRoutingModule } from "./public-profile-routing.module";
import { PublicProfileComponent } from "./public-profile/public-profile.component";

@NgModule({
    declarations: [
      PublicProfileComponent,
    ],
    imports: [
        PublicProfileRoutingModule
    ],
    providers: [],
    bootstrap: []
  })
  export class PublicProfileModule{ }