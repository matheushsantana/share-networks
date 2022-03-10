import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublicProfileComponent } from "./public-profile/public-profile.component";

const routes: Routes = [
    { path: ':id', component: PublicProfileComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicProfileRoutingModule {
    
}