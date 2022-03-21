import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApresentacaoComponent } from "./apresentacao/apresentacao.component";
import { BoasVindasComponent } from "./boas-vindas/boas-vindas.component";
import { CatalogoComponent } from "./catalogo/catalogo.component";
import { InicioComponent } from "./inicio/inicio.component";
import { InitialTemplateComponent } from "./initial-template/initial-template.component";
import { LinksComponent } from "./links/links.component";
import { MonteSeuSiteComponent } from "./monte-seu-site/monte-seu-site.component";
import { PreviewComponent } from "./preview/preview.component";
import { RedesSociaisComponent } from "./redes-sociais/redes-sociais.component";
import { SecoesComponent } from "./secoes/secoes.component";

const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'template-inicial', component: InitialTemplateComponent },
    { path: 'secoes', component: SecoesComponent },
    { path: 'apresentacao', component: ApresentacaoComponent },
    { path: 'boas-vindas', component: BoasVindasComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'links', component: LinksComponent },
    { path: 'redes-sociais', component: RedesSociaisComponent },
    { path: 'monte-seu-site', component: MonteSeuSiteComponent },
    { path: 'preview', component: PreviewComponent }
 ];
 
 @NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
 })
 export class CriacaoRoutingModule{ }