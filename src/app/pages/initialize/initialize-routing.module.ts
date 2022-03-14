import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InitializeComponent } from "./initialize/initialize.component";

const routes: Routes = [
   { path: 'new', component: InitializeComponent} 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InitializeRoutingModule{

}