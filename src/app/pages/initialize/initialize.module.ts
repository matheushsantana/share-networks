import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InitializeRoutingModule } from "./initialize-routing.module";
import { InitializeComponent } from "./initialize/initialize.component";

@NgModule({
    declarations: [
        InitializeComponent
    ],
    imports: [
        CommonModule,
        InitializeRoutingModule
    ],
    providers: [],
    bootstrap: []
  })
  export class InitializeModule{

  }