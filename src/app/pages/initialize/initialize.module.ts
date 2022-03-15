import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InitializeRoutingModule } from "./initialize-routing.module";
import { InitializeComponent } from "./initialize/initialize.component";

@NgModule({
    declarations: [
        InitializeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        InitializeRoutingModule
    ],
    providers: [],
    bootstrap: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
  export class InitializeModule{

  }