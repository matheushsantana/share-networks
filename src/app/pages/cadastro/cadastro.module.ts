import { NgModule } from "@angular/core";
import { CadastroClienteComponent } from "./cadastro-cliente/cadastro-cliente.component";
import { CadastroRoutingModule } from "./cadastro-routing.module";

@NgModule({
    declarations: [
      CadastroClienteComponent,
    ],
    imports: [
        CadastroRoutingModule
    ],
    providers: [],
    bootstrap: []
  })
  export class CadastroModule{

  }