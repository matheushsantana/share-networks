import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InitializeRoutingModule } from "./initialize-routing.module";
import { InitializeComponent } from "./initialize/initialize.component";
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFirestoreModule } from '@angular/fire/firestore'

@NgModule({
    declarations: [
        InitializeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        InitializeRoutingModule,
        AngularFireStorageModule,
        AngularFirestoreModule
    ],
    providers: [],
    bootstrap: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
  export class InitializeModule{

  }