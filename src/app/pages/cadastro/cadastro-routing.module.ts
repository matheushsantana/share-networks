import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroClienteComponent } from "./cadastro-cliente/cadastro-cliente.component";

const routes: Routes = [
    { path: 'usuario', component: CadastroClienteComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastroRoutingModule{

}